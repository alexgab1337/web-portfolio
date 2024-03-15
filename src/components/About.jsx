import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="text-center leading-8 mb-40 w-[55rem] text-lg scroll-mt-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize  mb-8"> About me </h2>
      <p className="mb-3">
        Embarking on my university journey at{" "}
        <span className="font-medium">the UIC</span>, I eagerly began my studies
        in <span className="font-medium">Computer Science</span>. Fascinated by
        the endless possibilities of creating and innovating, I quickly found my
        calling in <span className="font-medium">web development</span>.{" "}
        <span className="italic">
          What captivates me the most about web development
        </span>{" "}
        is its dynamic nature and the satisfaction that comes from solving
        complex challenges. I have a profound{" "}
        <span className="underline">passion</span> for diving deep into coding
        problems and emerging with elegant solutions. My current expertise lies
        in{" "}
        <span className="font-medium">TailwindCSS, JavaScript, and React</span>,
        but I&apos;m also venturing into{" "}
        <span className="font-medium">Vue.js and Angular</span> to broaden my
        horizons. Driven by curiosity, I am on a continuous quest for knowledge
        and eager to embrace the latest advancements in technology. As I
        navigate through my academic and personal projects, I am keen on
        securing an <span className="font-medium">internship</span> to apply my
        skills in a real-world setting and further my development as a software
        engineer.
      </p>

      <p>
        <span className="italic">
          When I&apos;m not immersed in my studies or developing web
          applications
        </span>
        , I find solace in the creative world of{" "}
        <span className="font-medium">digital art and design</span>. Drawing and
        designing allow me to express my creativity in ways that complement my
        technical skills. Beyond the screen, I&apos;m an avid{" "}
        <span className="font-medium">outdoor enthusiast</span>—whether
        it&apos;s hiking through the breathtaking trails nearby or capturing the
        beauty of nature through photography. My thirst for knowledge extends
        beyond my academic pursuits; I am currently exploring the intriguing
        complexities of{" "}
        <span className="font-medium">environmental science</span> and
        sustainability, aiming to understand how technology can contribute to
        ecological conservation. These diverse interests not only enrich my life
        but also inspire me to incorporate unique perspectives into my
        programming projects.
      </p>
    </motion.section>
  );
}

export default About;
