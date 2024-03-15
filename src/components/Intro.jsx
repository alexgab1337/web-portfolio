import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function Intro() {
  return (
    <section className=" text-center scroll-mt-[100rem]" id="home">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
        className="flex items-center justify-center"
      >
        <img
          src="/my_avatar.jpg"
          alt="My avatar"
          className="h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl "
        />
      </motion.div>

      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-4xl w-[50rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Alex.</span> I&apos;m a{" "}
        <span className="font-bold">front-end developer</span>{" "}
        <span>and a</span> <span className="font-bold"> student at UIC.</span> I
        like building <span className="italic">things on the web</span>. My
        current focus is <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me <FaArrowRight className="opacity-90 text-[1rem]" />
        </a>

        <a
          href="/CV.pdf"
          download
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-105 transition  border border-black/10 "
        >
          Download CV <HiDownload />
        </a>

        <a
          href="https://t.me/seanceo"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition"
        >
          {" "}
          <FaTelegram className="text-[1.5rem]" />{" "}
        </a>

        <a
          href="https://github.com/alexgab1337"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition"
        >
          {" "}
          <FaGithub className="text-[1.5rem]" />{" "}
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
