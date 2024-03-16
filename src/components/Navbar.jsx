import { motion } from "framer-motion";
import { links } from "../assets/data.js";
import { useContext } from "react";
import clsx from "clsx";
import { ActiveSectionContext } from "../context/active-section-context.jsx";

function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useContext(ActiveSectionContext);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 flex justify-center items-center h-[3.25rem] w-[36rem] rounded-full border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl shadow-black/[0.08] backdrop-blur-[0.5rem] z-[10]"
    >
      <ul className="flex justify-center items-center gap-5 text-sm font-semibold text-gray-500 font-inter">
        {links.map((link) => (
          <li key={link.hash} className="relative">
            <a
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              href={link.hash}
              className={clsx(
                "flex w-full items-center justify-center px-3 py-2 hover:text-gray-950",
                { "text-gray-950": activeSection === link.name }
              )}
            >
              {link.name}

              {link.name === activeSection && (
                <motion.span
                  className="bg-gray-200 absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  style={{
                    borderRadius: 9999,
                  }}
                ></motion.span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
