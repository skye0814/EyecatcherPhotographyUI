import React from "react";
import { Breadcrumb } from "semantic-ui-react";
import { useSearchParams } from "react-router-dom";
import { PagedRequest } from "../models/PagedRequest";

const sections = [
    { key: 'Home', content: 'Home', link: false, href:'../' },
    { key: 'Services', content: 'Services', link: false, href:'/services' },
    { key: 'Products', content: 'Products', active: true, href:'/services/products' },
  ];

export default function Products(){
    const [searchParams] = useSearchParams();
    const queryParams: PagedRequest = {
        pageNumber: isNaN(Number(searchParams.get('pageNumber'))) ? Number(searchParams.get('pageNumber')) : null,
        pageSize: 1,
        sortBy: null,
        productCategoryId: 1
    }

    return (
        <div className="container">
            <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} />
        </div>
        
    );
}