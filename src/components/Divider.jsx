import { motion } from "framer-motion";

function Divider() {
  return (
    <motion.div
      className="bg-gray-200 my-[8rem] h-16 w-1 rounded-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

export default Divider;
