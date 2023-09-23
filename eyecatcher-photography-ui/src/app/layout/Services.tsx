import React, {useEffect, useState} from 'react';
import '../styles/services.css';
import { Grid } from 'semantic-ui-react';
import TitlePresentation from '../common/TitlePresentation';
import { getAsync } from '../services/api';
import { PagedResponse } from '../models/PagedResponse';
import { ProductCategory } from '../models/ProductCategory';
import { Link } from 'react-router-dom';
import ErrorFetch from '../common/ErrorFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { StyledBreadcrumb } from '../common/MUIStyledComponent';

export default function Services(){
    const [error, setError] = useState(null);
    const [data, setData] = useState<PagedResponse<ProductCategory[]>>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Product Categories fetch effect
    useEffect(() => {
        getAsync('/api/productCategory/getAllProductCategory')
            .then(response => {
                setData(response);
            })
            .catch(error => {
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
        <Breadcrumbs>
            <StyledBreadcrumb
            component="a"
            href="#"
            label="Home"
            icon={<FontAwesomeIcon icon={"home"} style={{fontSize: "11px"}}/>}
            />
            <StyledBreadcrumb component="a" href="#" label="Catalog" />
            <StyledBreadcrumb
            label="Accessories"
            />
        </Breadcrumbs>
        {/* <Breadcrumb icon='right angle' sections={sections} style={{margin: '10px 0 18px 0'}} /> */}

        <TitlePresentation titleName="Services" />

        {error ? <ErrorFetch /> : (
            <Grid columns={4} id="variable-grid">
                {data?.data.map((item) => {
                    return(
                        <Grid.Column  key={item.productCategoryID}>
                            <Link to={`products?productCategoryId=${item.productCategoryID}`}>
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