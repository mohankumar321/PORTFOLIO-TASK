import React from "react";
import BaseApp from "../Core/Base";
import "../Styles/project.css";

export default function ProjectPage(){
    return(
        <BaseApp
        title="MY PROJECTS"
        children={
            <div>
                <div className="projects">
                    <div className="proj"></div>
                    <div className="proj"></div>
                    <div className="proj"></div>
                    <div className="proj"></div>
                    <div className="proj"></div>
                    <div className="proj"></div>
                    <div className="proj"></div>
                    <div className="proj"></div>

                </div>
            </div>
        }>
        </BaseApp>
    )
}