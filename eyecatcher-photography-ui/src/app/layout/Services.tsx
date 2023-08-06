import React, {useEffect, useState} from 'react';
import '../styles/services.css';
import { Breadcrumb, Grid, Item, Segment } from 'semantic-ui-react';
import TitlePresentation from '../common/TitlePresentation';
import { get, headers, post } from '../services/api';
import { PagedResponse } from '../models/PagedResponse';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';

const sections = [
    { key: 'Home', content: 'Home', link: false, href:'../' },
    { key: 'Services', content: 'Services', active: true, href:'/services' },
  ];

export default function Services(){
    const [data, setData] = useState<PagedResponse<ProductCategory[]>>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Product Categories fetch effect
    useEffect(() => {
        const fetchData = async () => {
            try 
            {
                const response = await get('/ProductCategory/GetAllProductCategory'); 
                setData(response);
                console.log(response);
            } 
            catch (error) 
            {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
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
        if (windowWidth < 790)
        {
            document.getElementById("variable-grid")!.className = 'ui one column grid';
        }
        else
        {
            document.getElementById("variable-grid")!.className = 'ui four column grid';
        }
    });

    return(
    <div className='container'>
        <Breadcrumb icon='right angle' sections={sections} style={{marginBottom: '18px'}} />
        <TitlePresentation titleName="Services" />
        <Grid columns={4} id="variable-grid">
            {data?.data.map((item) => {
                return(
                    <Grid.Column  key={item.productCategoryID}>
                        <div className='img-hover-zoom img-hover-zoom--colorize'>
                            <img src={item.imageUrl} />
                            <span>{item.categoryName}</span>
                            <span>{item.categoryDescription}</span>
                        </div>
                    </Grid.Column>
                )
            })}
        </Grid>
        
    </div>
    );
}