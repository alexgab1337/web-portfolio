import { skillsData } from "../assets/data.js";
import useSectionInView from "../hooks/hooks.js";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills" });

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-5xl scroll-mt-[15rem] text-center mb-[32rem] text-neutral-800 "
    >
      <h2 className="text-3xl font-medium capitalize mb-[4rem] text-center">
        {" "}
        My skills{" "}
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-full px-5 py-3 flex justify-center items-center gap-2 font-medium"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.name}
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="size-8"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
