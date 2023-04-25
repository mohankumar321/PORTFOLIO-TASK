import React from "react";
import BaseApp from "../Core/Base";
import "../Styles/welcome.css";

export default function WelcomePage(){
    return(
       <BaseApp
       title="Welcome To My Portfolio!🖐️"
       Children={
        <div>
            <div className="wel-box">
                <div className="well-bg">
            
            <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"><div className="wel-abt"></div>Hi, Iam<br></br> MOHANKUMAR S<br></br>And iam a Full Stack Developer </h3>
    </div>
  </div>
</div>


                </div>
            </div>
            



        </div>
        
       }>
        

        
       </BaseApp>
    )
}