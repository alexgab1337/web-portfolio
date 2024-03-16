import { useInView } from "react-intersection-observer";
import { ActiveSectionContext } from "../context/active-section-context.jsx";
import { useContext, useEffect } from "react";

function useSectionInView({ sectionName, threshold = 0.75 }) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } =
    useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export default useSectionInView;