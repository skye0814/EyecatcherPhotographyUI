import React, { useEffect, useState } from "react";
import { Breadcrumb } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";
import { PagedRequest } from "../models/PagedRequest";
import { get } from "../services/api";
import { PagedResponse } from "../models/PagedResponse";
import { Product } from "../models/Product";

const sections = [
    { key: 'Home', content: 'Home', link: false, href:'../' },
    { key: 'Services', content: 'Services', link: false, href:'/services' },
    { key: 'Products', content: 'Products', active: true, href:'/services/products' },
  ];

export default function Products(){
    const [product, setProduct] = useState<PagedResponse<Product[]>>();
    const [error, setError] = useState(null);
    const [searchParams]: any = useSearchParams();
    const queryParams: PagedRequest = {
        pageNumber: !isNaN(parseInt(searchParams.get('pageNumber'))) ? searchParams.get('pageNumber') : 1,
        pageSize: !isNaN(parseInt(searchParams.get('pageSize'))) ? searchParams.get('pageSize') : 10,
        sortBy: searchParams.get('sortBy'),
        productCategoryId: !isNaN(parseInt(searchParams.get('productCategoryId'))) ? searchParams.get('productCategoryId') : null
    }

    useEffect(()=> {
        get(`/Product/Products?pageNumber=${queryParams.pageNumber}&pageSize=${queryParams.pageSize}&sortBy=${queryParams.sortBy}&productCategoryId=${queryParams.productCategoryId}`)
        .then((response)=> {
            setProduct(response);
        })
        .catch((error)=>{
            setError(error);
        })
    },[]);

    return (
        <div className="container">
            <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} />
        </div>
        
    );
}