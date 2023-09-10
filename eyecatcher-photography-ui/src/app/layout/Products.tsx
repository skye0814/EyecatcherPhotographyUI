import React, { useEffect, useRef, useState } from "react";
import { Breadcrumb, Button } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";
import { PagedRequest } from "../models/PagedRequest";
import { get } from "../services/api";
import { PagedResponse } from "../models/PagedResponse";
import { Product } from "../models/Product";
import { useRadio } from "@chakra-ui/react";

const sections = [
    { key: 'Home', content: 'Home', link: false, href:'../' },
    { key: 'Services', content: 'Services', link: false, href:'/services' },
    { key: 'Products', content: 'Products', active: true, href:'/services/products' },
  ];

export default function Products(){
    const [showNextPage, setShowNextPage] = useState(false);
    const [showPrevPage, setShowPrevPage] = useState(false);
    const [products, setProducts] = useState<PagedResponse<Product[]>>();
    const [error, setError] = useState(null);
    const [searchParams]: any = useSearchParams();
    const [queryParams, setQueryParams] = useState<PagedRequest>({
        pageNumber: 1,
        pageSize: 2,
        sortBy: 'productName',
        productCategoryId: !isNaN(parseInt(searchParams.get('productCategoryId'))) ? searchParams.get('productCategoryId') : null
    });

    const fetchProduct = (queryParams: PagedRequest) => {
        get(`/Product/Products?pageNumber=${queryParams.pageNumber}&pageSize=${queryParams.pageSize}
            &sortBy=${queryParams.sortBy}&productCategoryId=${queryParams.productCategoryId}`)
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
    
    useEffect(() => {
        // Fetch products on render
        fetchProduct(queryParams);

        // Disable next page button
        if(products){
            if(queryParams.pageNumber === products.totalPages){
                setShowNextPage(false);
            }
        }

    }, []);

    return (
        <div className="container">
            <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} />
            <button 
                id="next-page-btn" 
                onClick={()=>{nextPage(queryParams.pageNumber + 1)}} 
                disabled={showNextPage}
            >
                Page up
            </button>

            <p>{queryParams.pageNumber}</p>
            <div>{products?.pageNumber}</div>
            <div>{products?.pageSize}</div>
        </div>
        
    );
}