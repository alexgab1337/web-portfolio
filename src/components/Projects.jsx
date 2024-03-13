import React from 'react'
import { projectsData } from '.././assets/data.js';
import Project from "./Project.jsx"

function Projects() {
    return (
        <section>
            <h2 className="text-3xl font-medium capitalize mb-8 text-center"> Projects </h2>
            <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project}/>
            </React.Fragment>
        ))}
            </div>
        </section>
    );
}


export default Projects;