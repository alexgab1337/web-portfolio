import React from "react";
import { projectsData } from ".././assets/data.js";
import Project from "./Project.jsx";
import { useInView } from "react-intersection-observer";
import { ActiveSectionContext } from "../context/active-section-context.jsx";
import { useContext, useEffect } from "react";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-32">
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
