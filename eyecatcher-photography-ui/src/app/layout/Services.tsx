import React, {useEffect, useState} from 'react';
import '../styles/services.css';
import { Grid } from 'semantic-ui-react';
import TitlePresentation from '../common/TitlePresentation';
import { getAsync } from '../services/api';
import { PagedResponse } from '../models/PagedResponse';
import { ProductCategory } from '../models/ProductCategory';
import { Link } from 'react-router-dom';
import ErrorFetch from '../common/ErrorFetch';
import { AspectRatio, Skeleton, Typography } from '@mui/joy';

export default function Services(){
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<PagedResponse<ProductCategory[]>>();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const loopArraySkeleton = new Array(4).fill(null);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Product Categories fetch effect
    useEffect(() => {
        // Change title
        document.title = "Services | " + document.title;
        setIsLoading(true);

        getAsync('/api/productCategory/getAllProductCategory')
            .then(response => {
                setData(response);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            })
    }, []);

    // Resizing effect
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        // Change grid column effect
        var variableGrid = document.getElementById("variable-grid");
        if(variableGrid){
            windowWidth < 790 ? variableGrid!.className = 'ui one column grid' : variableGrid!.className = 'ui four column grid';
        }
        var variableSkeleton = document.getElementById("variable-skeleton");
        if(variableSkeleton){
            windowWidth < 790 ? variableSkeleton!.className = 'ui one column grid' : variableSkeleton!.className = 'ui four column grid';
        }
    });

    return(
    <div className='container' id='container'>
        
        <div style={{marginTop: '120px'}}></div>
        <TitlePresentation titleName="Services"/>
        {isLoading 
        ? 
            <Grid columns={4} id="variable-skeleton">
                {loopArraySkeleton.map((_,index) => {
                    return(
                    <Grid.Column key={index}>
                        <AspectRatio className='customMUIAspectRatio'>
                            <Skeleton />
                        </AspectRatio>
                    </Grid.Column>
                    );
                })}
            </Grid>
        :
        error ? <ErrorFetch error={error}/> : 
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
        }
    </div>
    );
}