import { useHistory } from "react-router-dom";
import "../Styles/Intro.css";
import React from "react"

export default function BaseApp({title,styles,Children,content}){
   const history=useHistory()
    return(
        <div>

        <div className="Dashboard">
        
            <button onClick={()=>history.push("/aboutme")} className="button-92 abt" id="Base-btn">ABOUT ME</button>
            <button onClick={()=>history.push("/projects")} className="button-92 pr" id="Base-btn">MY PROJECTS</button>
            <button onClick={()=>history.push("/skills")} className="button-92 skl" id="Base-btn">TECHNICAL SKILLS</button>
            <button onClick={()=>history.push("/resume")} className="button-92 rsm" id="Base-btn">MY RESUME</button>
            <button onClick={()=>history.push("/contact")} className="button-92 rsm" id="Base-btn">CONTACT</button>
    </div>
       

             <div className="title-head">
        <div className="title"><h1>{title}</h1></div>
        </div>
        
        <div className="child">{Children}</div>
   

        <footer className="footer">

            <div class="container">
  <button className="footer-btn" >
    Thank Your For Your Visit</button>
   </div>
      
     </footer>
      
        </div>
       



      
    )
}