import { fadeIn } from "@/utils/animation";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Partner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: `-200px` });

  return (
    <section id="Partner" ref={ref} className="py-[40px] bg-bgSection">
      <div className="wrapper">
        <div className="text-center mb-[30px]">
          <h2 className="flex flex-wrap justify-center title text-white">
            Đồng hành cùng
            <div className="font-logo text-sunny"> DAT Travel</div>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView && "show"}
          variants={fadeIn(1, 1, 0.5)}
          className="flex flex-wrap gap-4 items-center justify-center md:justify-between max-md:w-[500px] max-w-full m-auto"
        >
          <div className=" h-[70px]">
            <img src="/logoPartner1.png" alt="" className="object-scale-down" />
          </div>
          <div className=" h-[70px]">
            <img src="/logoPartner2.png" alt="" className="object-scale-down" />
          </div>
          <div className=" h-[70px]">
            <img src="/logoPartner3.png" alt="" className="object-scale-down" />
          </div>
          <div className=" h-[70px]">
            <img src="/logoPartner4.png" alt="" className="object-scale-down" />
          </div>
          <div className=" h-[70px]">
            <img src="/logoPartner5.png" alt="" className="object-scale-down" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partner;
