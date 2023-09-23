import React, { useEffect } from "react";
import '../styles/loginpage.css';
import { color } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage(){
    useEffect(() => {
        document.getElementById("navbar")!.style.visibility = 'hidden';
    },[]);

    return(
        <div>
            
        </div>
    );
}