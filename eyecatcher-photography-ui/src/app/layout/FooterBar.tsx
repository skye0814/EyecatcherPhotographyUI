import React, { useEffect } from "react";
import '../styles/footerbar.css';
import { Box, Typography } from "@mui/joy";

export default function FooterBar(){
    useEffect(() => {
        if (window.location.pathname == '/login') {
            let footer = document.getElementById("footer") as HTMLElement;

            footer.style.display = 'none';
        }
    },[]);
    return(
        <footer className="footer" id="footer">
            <div 
                className="footer-logo"
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <Box
                    component="span"
                    sx={{
                    width: '50px',
                    height: '50px',
                    backgroundImage: `url("/images/logowhite.png")`,
                    backgroundSize: "110%",
                    backgroundRepeat: "no-repeat"
                    }}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography fontFamily='General Sans'
                        textColor="white"
                        fontSize='17px'
                        fontWeight='500'
                    >
                        Eyecatcher Photography
                    </Typography>
                    <Typography fontFamily='General Sans'
                        textColor="white"
                        fontSize='12px'
                    >
                        © {new Date().getFullYear()} All Rights Reserved
                    </Typography>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '50px'
            }}>
                <div className="footer-navigation">
                    <Typography fontFamily='General Sans'
                        textColor="white"
                        fontSize='15px'
                        fontWeight='500'
                        paddingBottom='15px'
                        textTransform='uppercase'
                    >
                        About
                    </Typography>
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="cart">Cart</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-navigation">
                    <Typography fontFamily='General Sans'
                        textColor="white"
                        fontSize='15px'
                        fontWeight='500'
                        paddingBottom='15px'
                        textTransform='uppercase'
                    >
                        Services
                    </Typography>
                    <a href="/services/products?productCategoryId=1">Birthday Services</a>
                    <a href="/services/products?productCategoryId=2">Christening Services</a>
                    <a href="/services/products?productCategoryId=3">Wedding Services</a>
                    <a href="/services/products?productCategoryId=4">Other Services</a>
                </div>
            </div>
            
        </footer>
    );
}