import { fadeIn } from "@/utils/animation";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: `-200px` });

  return (
    <section id="Gallery" className="py-[40px]" ref={ref}>
      <div className="wrapper ">
        <div className="text-center">
          <h2 className="title">Hình ảnh chuyến đi</h2>
          <p className="text-grey">
            Hành trình tuyệt vời của bạn qua lăng kính của chúng tôi
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView && "show"}
          variants={fadeIn(1, 1, 0.5)}
          className="mt-[30px]"
        >
          <div className="grid grid-rows-7 grid-cols-4 gap-4 md:w-[80%] max-md:w-full h-[800px] m-auto">
            <div className="col-span-2 row-span-4 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/imgGallery1.jpg" alt="" />
            </div>
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/imgGallery2.jpg" alt="" />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/imgGallery3.jpg" alt="" />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/imgGallery4.webp" alt="" />
            </div>
            <div className="col-span-4 row-span-3 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/imgGallery5.jpg" alt="" className="object-bottom" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
