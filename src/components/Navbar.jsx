import { motion } from "framer-motion";
import { links } from "../assets/data.js";
import { useState } from "react";
import clsx from "clsx";

function Navbar() {
  const [activeSection, setActiveSection] = useState(links[0].name);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      className="fixed top-6 left-1/2 flex justify-center items-center h-[3.25rem] w-[36rem] rounded-full border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl shadow-black/[0.08] backdrop-blur-[0.5rem] z-[1]"
    >
      <ul className="flex justify-center items-center gap-5 text-sm font-semibold text-gray-500 font-inter relative">
        {links.map((link) => (
          <li key={link.hash} className="relative">
            <a
              onClick={() => {
                setActiveSection(link.name);
              }}
              href={link.hash}
              className={clsx(
                "relative flex w-full items-center justify-center px-3 py-2 hover:text-gray-950",
                { "text-gray-950": activeSection === link.name }
              )}
            >
              {link.name}

              {link.name === activeSection && (
                <motion.span
                  className=" bg-gray-200 rounded-full absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
