import { SearchDetail } from "@/components";
import { fadeInDown } from "@/utils/animation";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Introduce = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: `-200px` });
  const [addAnimate, setAddAnimate] = useState(false);
  useEffect(() => {
    if (isInView) {
      setAddAnimate(true);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="Introduce"
      className="relative h-fit flex flex-col wrapper max-md:py-5 max-md:items-center py-[30px]"
    >
      <div className="flex md:gap-10 max-md:gap-5 w-full md:h-full max-md:h-fit max-md:flex-col ">
        <div className="md:w-[40%] flex flex-col justify-start gap-5 ">
          <div className="text- font-logo px-3 py-2 bg-sky rounded-full w-fit text-white">
            Về Chúng Tôi
          </div>
          <h2 className="text-4xl font-signikaBold">
            Mang Thế Giới <br /> Đến Gần Bạn Hơn
          </h2>
          <div>
            Được thành lập với sứ mệnh kết nối con người và khám phá thế giới,
            chúng tôi cam kết cung cấp các dịch vụ du lịch chất lượng cao, từ
            những chuyến đi thư giãn đến những hành trình khám phá mạo hiểm.
            Chúng tôi hiểu rằng mỗi chuyến đi đều là một cơ hội để tạo nên những
            kỷ niệm đẹp và giá trị. Hãy để chúng tôi giúp bạn biến giấc mơ du
            lịch thành hiện thực.
          </div>

          <button className="px-4 py-3 bg-sky text-white rounded-full hover:scale-110 transition-transform w-fit">
            Tìm hiểu thêm
          </button>
        </div>

        <div className="md:w-[60%] max-md:h-fit flex justify-between items-start">
          {addAnimate &&
            Array.from(Array(3)).map((_, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isInView && "show"}
                variants={fadeInDown(1, index / 2)}
                className={`md:h-[350px] max-md:h-[200px] rounded-3xl border-solid border-2 border-sky w-[30%] md:mt-[${
                  80 * index
                }px] overflow-hidden 
              }`}
              >
                <img src={`/introduce${3 - index}.jpg`} alt="" />
              </motion.div>
            ))}
          {/* <div className="md:h-[350px] max-md:h-[200px] rounded-3xl border-solid border-2 border-sky w-[30%] md:mt-[80px] overflow-hidden">
            <img src="/introduce2.jpg" alt="" />
          </div>
          <div className="md:h-[350px] max-md:h-[200px] rounded-3xl border-solid border-2 border-sky w-[30%] md:mt-[160px] overflow-hidden">
            <img src="/introduce1.jpg" alt="" />
          </div> */}
        </div>
      </div>

      <div className="md:absolute md:bottom-[30px]">
        <SearchDetail />
      </div>
    </section>
  );
};

export default Introduce;
