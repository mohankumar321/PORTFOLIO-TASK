import React from "react";
import BaseApp from "../Core/Base";
import "../Styles/details.css";

export default function ContactPage(){
    return(
       <BaseApp title=" CONTACT-DETAILS"
       Children={
        <div className="details">

            <div className="details-head" >
               
               <div className="det-box ">MOBILE NO &#10148;<b> 7598987627</b></div>
                <div className="det-box">ADDRESS &#10148;<b> Salem,Karuppur - 636012</b></div>
                <div className="det-box">EMAIL &#10148;<b>smkmohan321@gmail.com</b></div>
                
                </div>
                
        </div>
       }>
       
       </BaseApp>
    )
}