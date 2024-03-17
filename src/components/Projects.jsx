import React from "react";
import { projectsData } from ".././assets/data.js";
import Project from "./Project.jsx";
import useSectionInView from "../hooks/hooks.js";

function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.5 });

  return (
    <section ref={ref} id="projects" className="scroll-mt-32 mb-28">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        {" "}
        Projects{" "}
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
