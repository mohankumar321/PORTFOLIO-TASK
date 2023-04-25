import React from "react";
import BaseApp from "../Core/Base";

import "../Styles/resume.css";

export default function Resumepage(){
    return(
<BaseApp
title="MY RESUME"
Children={
    <div>
        <div className="resume">
        <img src="Resumemohan.jpg" alt="Mountain"/> 
        </div>
        </div>
    
}>
</BaseApp>
    )
}
