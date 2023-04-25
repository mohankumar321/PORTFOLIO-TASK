import React  from "react";
import BaseApp from "../Core/Base";
import 'animate.css';


import "../Styles/Intro.css";

export default function IntroPage(){
    return(

        <BaseApp
        title="ABOUT ME"
       Children={

        <div className="child-container">

        <div className="child-box cb-1">DESCRIPTION
        <div id="cb-1">
        <p>
        Developing new features and functionality for web and mobile applications,
Writing clean, efficient, and well-documented code,
Collaborating with designers, developers, and other team members to create and maintain high-quality software,
Testing and debugging code to ensure it meets quality standards,
Working with databases and APIs to build scalable and performant applications,
Staying up-to-date with new technologies and best practices in software development.
        </p>
        </div>
      
        
        
        </div>

        <div className="child-box cb-2 ">PERSONAL-DETAILS
            <div id="cb-2">
                <p>
        <div className="nme cb">Name<b>&#10172;<span>Mohan Kumar S</span></b></div>
         <div className="sx cb">Sex<b>&#10172;<span>Male</span></b></div>
        <div className="db cb">D.O.B<b>&#10172;<span>27/07/1998</span></b> </div>
        <div className="ml cb"> Email<b>&#10172;<span>smkmohan321@gmail.com</span></b></div>
        <div className="ntl cb">Nationality<b>&#10172;<span>Indian</span></b></div></p>
        
        </div>
        </div>

        <div className="scl-icon">

        <div className="scl scl-1">
       
            
        <p>FAMILY INFO</p>

        <div className="tx">Father-Name<b>&#10172;<span>Subramani C</span></b></div>
        <div className="tx">Mother-Name<b>&#10172;<span>Bharathi S</span></b></div>
        <div className="tx">Sibling-Name<b>&#10172;<span>SanjeethKumar S</span></b></div>
        
            
            </div>

        <div className="scl scl-2">

            <a href="https://www.facebook.com" className="fa fa-facebook"> </a>

            <a href="https://www.instagram.com" className="fa fa-instagram"> </a>

            <a href="https://twitter.com" className="fa fa-twitter"> </a>

            <a href="https://www.snapchat.com" className="fa fa-snapchat"> </a>

        </div>
       
        </div>
        
       

      
        <div className="child-box cb-4">CAREER HISTORY
        <div id="cb-4">
        <p>"I am experienced in video editing 
            with  compelling and 
            engaging visual stories. Over 1 
            year, I have honed my
              skills in video editing, color grading,
               motion graphics, and sound design, 
               working on a diverse range of projects 
               including television, advertising and Digital Media .</p>
        
        
       
        </div>
        
        </div>

        <div className="child-box cb-5">EDUCATION HISTORY
        <div id="cb-5">
        <p>"
            I received my M.A Journalism & Mass Communication Degree from
            Periyar University
             During my time at Periyar University, I developed a strong
                 foundation in Editing,Content Writing which I have since applied in
                  my personal and professional life. Additionally, I have participated in various 
                  extracurricular activities and volunteer 
                  programs, including Workshops,Mimeprograms,Cricket,Football,
                   which have helped me develop leadership
                    skills, a sense of community, and a 
                    commitment to social responsibility.
                     I am proud of my education history 
                     and am always seeking opportunities 
            to continue learning and expanding my knowledge."</p>
       
       
        </div>
        
        </div>

        <div className="child-box cb-6">PERSONAL ASPIRATIONS
        <div id="cb-6">
<p>"My personal aspirations involve a 
    strong focus on self-improvement and 
    growth, both personally and professionally.
     I am committed to continuing my education
      and expanding my knowledge and skills in 
      my field of work. I also have a
       strong desire to travel more and
        experience new cultures and ways
         of life. In my personal life, I 
         aspire to maintain strong and positive
          relationships with my family and friends, 
          and to continue building meaningful 
          connections with new people I meet. 
          Ultimately, my goal is to live a fulfilling
           and purposeful life, making a positive
            impact on those around me and leaving 
            a lasting legacy that I can be proud 
            of."</p>
        </div>
        
        </div>

        </div>
       }>
    
        
        </BaseApp>
    )
}