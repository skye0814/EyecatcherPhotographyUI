import React, { useEffect, useRef, useState } from "react";
import '../../styles/products.css';
import { Breadcrumb, Grid } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";
import { PagedRequest } from "../../models/PagedRequest";
import { get } from "../../services/api";
import { PagedResponse } from "../../models/PagedResponse";
import { Product } from "../../models/Product";
import ProductCards from "./ProductCards";
import { Button } from "@mui/joy";
import TitlePresentation from "../../common/TitlePresentation";
import { ProductCategory } from "../../models/ProductCategory";

export default function Products(){
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 990);
    const [hideNextPage, setHideNextPage] = useState(false);
    const [hidePrevPage, setHidePrevPage] = useState(true);
    const [products, setProducts] = useState<PagedResponse<Product[]>>();
    const [productCategory, setProductCategory] = useState<ProductCategory>();
    const [error, setError] = useState(null);
    const [searchParams]: any = useSearchParams();
    const [queryParams, setQueryParams] = useState<PagedRequest>({
        pageNumber: 1,
        pageSize: isSmallScreen ? 4 : 8,
        sortBy: 'productName',
        productCategoryId: !isNaN(parseInt(searchParams.get('productCategoryId'))) ? searchParams.get('productCategoryId') : null
    });
    const sections = [
        { key: 'Home', content: 'Home', link: false, href:'../' },
        { key: 'Services', content: 'Services', link: false, href:'/services' },
        { key: 'Products', content: 'Products', active: true, href:`/services/products?productCategoryId=${queryParams.productCategoryId}` },
    ];

    const fetchProductCategory = () => {
        get(`/api/ProductCategory/GetProductCategoryById/${queryParams.productCategoryId}`)
        .then(response => {
            setProductCategory(response);
        })
        .catch(err => {
            setError(err);
        })
    }

    const fetchProduct = (queryParams: PagedRequest) => {
        get(`/api/Product/Products?pageNumber=${queryParams.pageNumber}
            &pageSize=${queryParams.pageSize}
            &sortBy=${queryParams.sortBy}
            &productCategoryId=${queryParams.productCategoryId}`)
        .then((response)=> {
            setProducts(response);
        })
        .catch((err)=>{
            setError(err);
        })
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const nextPage = (page: number) => {
        let updatedQueryParams: PagedRequest = {...queryParams};
        updatedQueryParams.pageNumber = page;
        updatedQueryParams.pageSize = isSmallScreen ? 4 : 8

        if(products){
            if(updatedQueryParams.pageNumber > products.totalPages){
                updatedQueryParams.pageNumber = page - 1;
                setQueryParams(updatedQueryParams);
            }
            else{
                setQueryParams(updatedQueryParams);
                fetchProduct(updatedQueryParams);
            }
        }
    }

    const prevPage = (page: number) => {
        let updatedQueryParams: PagedRequest = {...queryParams};
        updatedQueryParams.pageNumber = page;
        updatedQueryParams.pageSize = isSmallScreen ? 4 : 8
        
        if(products){
            if(updatedQueryParams.pageNumber < 1){
                updatedQueryParams.pageNumber = 1;
                setQueryParams(updatedQueryParams);
                console.log("works");
            }
            else{
                setQueryParams(updatedQueryParams);
                fetchProduct(updatedQueryParams);
            }
        }
    }

    useEffect(() => {
        // Get ProductCategory
        fetchProductCategory();

        // Change title
        document.title = "Products | " + document.title;

        // Fetch products on render
        fetchProduct(queryParams);
    }, []);

    useEffect(() => {
        nextPage(1);
    }, [isSmallScreen]);

    useEffect(() => {
        console.log(products);

        // Disables next and page button
        if(products){
            if(queryParams.pageNumber === products.totalPages){
                setHideNextPage(true);
            }
            else{
                setHideNextPage(false);
            }
            if(queryParams.pageNumber === 1){
                setHidePrevPage(true);
            }
            else{
                setHidePrevPage(false);
            }
        }
    }, [products]);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 990);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    },[]);

    return (
        <div className="container">
            <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} />
            <TitlePresentation titleName={productCategory?.categoryName}></TitlePresentation>

            <Grid className="product-grid" columns={isSmallScreen ? 1 : 4} centered stretched>
            {products?.data.map((product) => {
                return(
                    <Grid.Column key={product.productID}>
                        <ProductCards product={product} />
                    </Grid.Column>
                )
            })}
            </Grid>

            <div className="page-details">
                <Button className="primary-btn"
                    disabled={hidePrevPage}
                    style={{visibility: hidePrevPage ? 'hidden': 'visible'}}
                    onClick={()=>{prevPage(queryParams.pageNumber - 1); scrollToTop()}}
                >
                    Prev
                </Button>
                <span style={{fontWeight: '500'}}>Page {queryParams.pageNumber} of {products?.totalPages}</span>
                <Button className="primary-btn"
                    disabled={hideNextPage}
                    style={{visibility: hideNextPage ? 'hidden': 'visible'}}
                    onClick={()=>{nextPage(queryParams.pageNumber + 1); scrollToTop()}} 
                >
                    Next
                </Button>
            </div>
        </div>
        
    );
}