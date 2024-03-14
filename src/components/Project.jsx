import PropTypes from 'prop-types';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Project( {title, description, tags, imageUrl}) {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden pr-8 relative even:pl-8 hover:bg-gray-200 transition mb-8 rounded-md" ref={ref} style={{
            scale: scaleProgess,
            opacity: opacityProgess,
        }}>

            <div className="pb-7 px-5 pl-10 pr-2 pt-10 max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
                <h3 className="text-2xl font-semibold ">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 ">
                    {tags.map((tag, index) => (
                        <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <img src={imageUrl} alt={title} className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.05] group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:group-hover:scale-[1.05]"></img>
        </motion.section>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default Project; 