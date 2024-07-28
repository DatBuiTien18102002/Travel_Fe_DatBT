import TextLoading from "@/components/TextLoading/TextLoading";
import { fadeIn } from "@/utils/animation";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <motion.div
      variants={fadeIn(1)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="fixed inset-0 z-[2000] flex-center flex-col bg-sky"
    >
      <div className="w-[220px] h-[220px]">
        <img src="/loading_gif.gif" alt="loading" />
      </div>

      <div className="w-full flex-center">
        <TextLoading fontSize="text-3xl" color="text-white" />
      </div>
    </motion.div>
  );
};

export default LoadingPage;
