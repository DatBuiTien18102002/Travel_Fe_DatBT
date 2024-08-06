import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whyUs } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { fadeInLeft } from "@/utils/animation";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: `-200px` });
  const [addAnimate, setAddAnimate] = useState(false);
  useEffect(() => {
    if (isInView) {
      setAddAnimate(true);
    }
  }, [isInView]);

  return (
    <section id="WhyUs" ref={ref} className="bg-bgSection py-[40px]">
      <div className="wrapper">
        <h2 className="title text-white text-center">
          Lý do bạn nên chọn <br className="sm:hidden" />
          <span className="font-logo text-sunny"> DAT Travel</span>
        </h2>

        <div className="mt-[40px]  flex justify-center">
          <div className="flex gap-[30px] justify-between max-md:flex-col w-fit">
            {addAnimate &&
              whyUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  animate={isInView && "show"}
                  variants={fadeInLeft(1, index / 2, 1)}
                  className={`flex md:flex-col gap-4 items-center`}
                >
                  <div className="rounded-3xl bg-sky w-[60px] h-[60px] flex flex-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-[30px] h-[30px] text-white"
                    />
                  </div>
                  <div className="md:text-center">
                    <div className="font-robotoBold">{item.title}</div>
                    <div className="text-grey text-sm md:max-w-[180px] max-md:max-w-[300px]">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
