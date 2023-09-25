import React, {useEffect, useState} from 'react';
import '../styles/services.css';
import { Grid } from 'semantic-ui-react';
import TitlePresentation from '../common/TitlePresentation';
import { getAsync } from '../services/api';
import { PagedResponse } from '../models/PagedResponse';
import { ProductCategory } from '../models/ProductCategory';
import { Link } from 'react-router-dom';
import ErrorFetch from '../common/ErrorFetch';
import { CssBaseline, CssVarsProvider, GlobalStyles, Typography } from '@mui/joy';

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
        <CssVarsProvider>
        <CssBaseline />
        <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '40vw', // must be `vw` only
            '--Form-maxWidth': '700px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
    <div className='container' id='container'>
        

        <TitlePresentation titleName="Services" />

        {error ? <ErrorFetch /> : (
            <Grid columns={4} id="variable-grid">
                {data?.data.map((item) => {
                    return(
                        <Grid.Column  key={item.productCategoryID}>
                            <Link to={`products?productCategoryId=${item.productCategoryID}`}>
                            <div className='img-hover-zoom img-hover-zoom--colorize'>
                                <img src={item.imageUrl} />
                                <span>
                                    <Typography level="title-lg" sx={{ my: 1, mb: 3 }} textColor='white'>
                                        {item.categoryName}
                                    </Typography>
                                </span>
                                <span>
                                    <Typography level="body-md" sx={{ my: 1, mb: 3 }} textColor='white'>
                                        {item.categoryDescription}
                                    </Typography>
                                </span>
                            </div>
                            </Link>
                        </Grid.Column>
                    )
                })}
            </Grid>
        )}
    </div>
    </CssVarsProvider>
    );
}