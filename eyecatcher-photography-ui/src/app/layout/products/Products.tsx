import React, { useEffect, useRef, useState } from "react";
import '../../styles/products.css';
import { Breadcrumb, Button, Grid } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";
import { PagedRequest } from "../../models/PagedRequest";
import { get } from "../../services/api";
import { PagedResponse } from "../../models/PagedResponse";
import { Product } from "../../models/Product";
import ProductCards from "./ProductCards";

export default function Products(){
    const [hideNextPage, setHideNextPage] = useState(false);
    const [hidePrevPage, setHidePrevPage] = useState(true);
    const [products, setProducts] = useState<PagedResponse<Product[]>>();
    const [error, setError] = useState(null);
    const [searchParams]: any = useSearchParams();
    const [queryParams, setQueryParams] = useState<PagedRequest>({
        pageNumber: 1,
        pageSize: 4,
        sortBy: 'productName',
        productCategoryId: !isNaN(parseInt(searchParams.get('productCategoryId'))) ? searchParams.get('productCategoryId') : null
    });
    const sections = [
        { key: 'Home', content: 'Home', link: false, href:'../' },
        { key: 'Services', content: 'Services', link: false, href:'/services' },
        { key: 'Products', content: 'Products', active: true, href:`/services/products?productCategoryId=${queryParams.productCategoryId}` },
    ];

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

    const nextPage = (page: number) => {
        let updatedQueryParams: PagedRequest = {...queryParams};
        updatedQueryParams.pageNumber = page;

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
        // Fetch products on render
        fetchProduct(queryParams);
    }, []);

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
    }, [products])

    return (
        <div className="container">
            <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} />
            <button 
                id="next-page-btn" 
                onClick={()=>{nextPage(queryParams.pageNumber + 1);}} 
                disabled={hideNextPage}
                style={{visibility: hideNextPage ? 'hidden': 'visible'}}
            >
                Page up
            </button>
            <button 
                id="prev-page-btn" 
                onClick={()=>{prevPage(queryParams.pageNumber - 1); console.log(products)}} 
                disabled={hidePrevPage}
                style={{visibility: hidePrevPage ? 'hidden': 'visible'}}
            >
                Page down
            </button>
            

            <p>{queryParams.pageNumber}</p>
            <div>{products?.pageNumber}</div>
            <div>{products?.pageSize}</div>

            <Grid columns={4} centered stretched>
            {products?.data.map((product) => {
                return(
                    <Grid.Column key={product.productID}>
                        <ProductCards product={product} />
                    </Grid.Column>
                )
            })}
            </Grid>
                
            
        </div>
        
    );
}