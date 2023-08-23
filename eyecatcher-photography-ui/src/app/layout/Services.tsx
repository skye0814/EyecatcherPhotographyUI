import React, {useEffect, useState} from 'react';
import '../styles/services.css';
import { Breadcrumb, Grid, Item, Segment } from 'semantic-ui-react';
import TitlePresentation from '../common/TitlePresentation';
import { get } from '../services/api';
import { PagedResponse } from '../models/PagedResponse';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { Link } from 'react-router-dom';
import ErrorFetch from '../common/ErrorFetch';

const sections = [
    { key: 'Home', content: 'Home', link: false, href:'../' },
    { key: 'Services', content: 'Services', active: true, href:'/services' },
  ];

export default function Services(){
    const [error, setError] = useState(null);
    const [data, setData] = useState<PagedResponse<ProductCategory[]>>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Product Categories fetch effect
    useEffect(() => {
        get('/ProductCategory/GetAllProductCategory')
            .then(response => {
                console.log(response);
                setData(response);
            })
            .catch(error => {
                console.log(error);
                setError(error);
            })
    }, []);

    // Resizing effect
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    // Change grid column effect
    useEffect(() => {
        var variableGrid = document.getElementById("variable-grid");
        if(variableGrid){
            windowWidth < 790 ? variableGrid!.className = 'ui one column grid' : variableGrid!.className = 'ui four column grid';
        }
    });

    return(
    <div className='container' id='container'>
        <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} />
        <TitlePresentation titleName="Services" />

        {error ? <ErrorFetch /> : (
            <Grid columns={4} id="variable-grid">
                {data?.data.map((item) => {
                    return(
                        <Grid.Column  key={item.productCategoryID}>
                            <Link to={`products?productCategoryId=${item.productCategoryID}&pageNumber=1&pageSize=10&sortBy=productName`}>
                            <div className='img-hover-zoom img-hover-zoom--colorize'>
                                <img src={item.imageUrl} />
                                <span>{item.categoryName}</span>
                                <span>{item.categoryDescription}</span>
                            </div>
                            </Link>
                        </Grid.Column>
                    )
                })}
            </Grid>
        )}
        
    </div>
    );
}