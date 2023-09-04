import React, { useEffect, useState } from "react";
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
    let product: PagedResponse<Product[]>;

    const fetchProduct = (queryParams: PagedRequest) => {
        get(`/Product/Products?pageNumber=${queryParams.pageNumber}&pageSize=${queryParams.pageSize}
            &sortBy=${queryParams.sortBy}&productCategoryId=${queryParams.productCategoryId}`)
        .then((response)=> {
            product = response;
            console.log(product);
        })
        .catch((err)=>{
            setError(err);
            console.log(error);
        })
    }
    const [error, setError] = useState(null);
    const [searchParams]: any = useSearchParams();
    
    const [queryParams, setQueryParams] = useState<PagedRequest>({
        pageNumber: 1, //!isNaN(parseInt(searchParams.get('pageNumber'))) ? searchParams.get('pageNumber') : 1,
        pageSize: 10, //!isNaN(parseInt(searchParams.get('pageSize'))) ? searchParams.get('pageSize') : 10,
        sortBy: 'productName', //searchParams.get('sortBy'),
        productCategoryId: !isNaN(parseInt(searchParams.get('productCategoryId'))) ? searchParams.get('productCategoryId') : null
    });

    const nextPage = () => {
        const updatedQueryParams: PagedRequest = {...queryParams};

        if (product){
            if(product!.data.length < queryParams.pageSize){
                updatedQueryParams.pageNumber += 1;
                setQueryParams(updatedQueryParams);
                fetchProduct(queryParams);
            }
            else{
                console.log("error on next page");
            }
        }
    }
    

    // const prevPage = () => {
    //     const updatedQueryParams: PagedRequest = {...queryParams};
    // }

    return (
        <div className="container">
            <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} />
            <button onClick={()=>{}}>Page up</button>
        </div>
        
    );
}