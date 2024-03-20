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
      className="fixed top-0 flex justify-between items-center h-[4.2rem] w-full border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem] z-[10] pl-[5rem] pr-[3.5rem]"
    >
      <span className="text-2xl font-bold text-neutral-800 ">
        Alexander Gabrichidze
      </span>
      <ul className="flex justify-center items-center gap-5 text-xl font-semibold text-[#FDFDFD]">
        {links.map((link) => (
          <li key={link.hash} className="relative ">
            <a
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              href={link.hash}
              className={clsx(
                "flex w-full items-center justify-center px-5 pb-[0.5rem] pt-[0.3rem] ",
                {
                  "text-[#FDFDFD] hover:text-neutral-200":
                    activeSection === link.name,
                  "hover:text-neutral-50": activeSection !== link.name,
                }
              )}
            >
              <span className="mix-blend-exclusion text-xl tracking-wider ">
                {link.name}
              </span>

              {link.name === activeSection && (
                <motion.span
                  className="bg-neutral-800 absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "tween",
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
