import { motion } from "framer-motion";
import useSectionInView from "../hooks/hooks.js";

function About() {
  const { ref } = useSectionInView({ sectionName: "About" });

  return (
    <>
      <h2 className="text-3xl font-medium capitalize mb-[5rem] text-neutral-800">
        {" "}
        About me{" "}
      </h2>
      <motion.section
        className="text-center leading-8 text-lg scroll-mt-[16rem] flex justify-center items-center gap-[10rem] mb-[22rem] "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        ref={ref}
      >
        <img
          src="/me-full-nature.jpg"
          alt="Picture of me"
          className="size-[30%] rounded-xl shadow-xl shadow-black/45"
        ></img>
        <div className="flex flex-col w-[40rem] justify-center items-center">
          <p className="mb-3  ">
            Embarking on my university journey at{" "}
            <span className="font-medium">the UIC</span>, I eagerly began my
            studies in <span className="font-medium">Computer Science</span>.
            Fascinated by the endless possibilities of creating and innovating,
            I quickly found my calling in{" "}
            <span className="font-medium">web development</span>.{" "}
            <span className="italic">
              What captivates me the most about web development
            </span>{" "}
            is its dynamic nature and the satisfaction that comes from solving
            complex challenges. I have a profound{" "}
            <span className="underline">passion</span> for diving deep into
            coding problems and emerging with elegant solutions. My current
            expertise lies in{" "}
            <span className="font-medium">
              TailwindCSS, JavaScript, and React
            </span>
            , but I&apos;m also venturing into{" "}
            <span className="font-medium">Vue.js and Angular</span> to broaden
            my horizons.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default About;
