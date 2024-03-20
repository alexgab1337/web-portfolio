import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import useSectionInView from "../hooks/hooks.js";
import { ActiveSectionContext } from "../context/active-section-context.jsx";
import { useContext } from "react";

function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.5 });
  const { setActiveSection, setTimeOfLastClick } =
    useContext(ActiveSectionContext);

  return (
    <section
      ref={ref}
      className="text-center scroll-mt-[100rem] -mt-[6rem] mb-[20rem] text-neutral-800"
      id="home"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="flex items-center justify-center relative"
      >
        <img
          src="/my_avatar.jpg"
          alt="My avatar"
          className="size-[20rem] rounded-full border-[0.25rem] border-white object-cover shadow-2xl"
        />
      </motion.div>

      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-4xl w-[55rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold ">Hi, I&apos;m Alexander.</span> Pursuing{" "}
        <span className="font-bold">Computer Science </span> <span>at</span>{" "}
        <span className="font-bold">the University of Illinois at Chicago</span> with dreams of becoming a{" "}
        <span className="font-bold">Software Engineer </span>
        <span className="italic">one day.</span>
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          href="#contact"
          className="bg-neutral-800 text-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-neutral-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now);
          }}
        >
          Contact me{" "}
          <HiOutlineMail className="opacity-90 text-[1.4rem] mt-[2px]" />
        </a>

        <a
          href="/CV.pdf"
          download
          className="bg-white px-7 py-[0.7rem] flex items-center gap-2 rounded-full outline-none hover:bg-gray-100 hover:scale-105 active:scale-105 transition border borderBlack"
        >
          Download CV <HiDownload />
        </a>

        {/* <a
          href="https://t.me/seanceo"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition border borderBlack"
        >
          {" "}
          <FaTelegram className="text-[1.5rem]" />{" "}
        </a> */}

        <a
          href="https://github.com/alexgab1337"
          target="_blank"
          className="bg-white p-4 text-neutral-800 flex items-center gap-2 rounded-full text-[1.35rem] hover:bg-gray-100 hover:scale-[1.07] hover:text-neutral-900 active:scale-105 transition border borderBlack"
        >
          {" "}
          <FaGithub className="text-[1.5rem]" />{" "}
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
