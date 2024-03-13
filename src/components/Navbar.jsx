import { motion } from "framer-motion"
import { links } from '.././assets/data.js';


function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, x: "-50%"}} 
            animate={{ y: 0, x: "-50%"}}
            className="fixed top-6 left-1/2 flex justify-center items-center h-[3.25rem] w-[36rem] rounded-full border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl shadow-black/[0.08] backdrop-blur-[0.5rem] z-[1]">
            
            <ul className="flex justify-center items-center gap-5 text-sm font-semibold text-gray-500 font-inter">
                {
                    links.map(link => (
                        <li key={link.hash}>
                            <a href={link.hash} className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950">
                                {link.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </motion.nav>
    );
}

export default Navbar;