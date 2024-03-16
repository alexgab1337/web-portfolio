import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const ActiveSectionContext = createContext(null);

function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

ActiveSectionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActiveSectionContextProvider;