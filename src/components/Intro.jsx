import { motion } from "framer-motion"

function Intro() {
    return (
        <section className="mb-28 text-center flex flex-col justify-center items-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "tween", duration: 0.2}}className="flex items-center justify-center">
                <img src="/my_avatar.jpg" alt="My avatar" className="h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl "/>
            </motion.div>

            <motion.h1
                className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-4xl w-[50rem]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m Alex.</span> I&apos;m a{" "}
                <span className="font-bold">front-end developer</span>{" "}
                <span>and a</span> <span className="font-bold"> student at UIC.</span> I enjoy
                building <span className="italic">websites & webapps</span>. My current focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
        </section>
    );
}

export default Intro;