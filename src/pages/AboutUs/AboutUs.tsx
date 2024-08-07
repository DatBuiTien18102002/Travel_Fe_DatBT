import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { statisticsAboutUs } from "@/constants";
import { serviceHighlights, strengthAboutUs } from "@/utils/constants";
import { useInView, motion } from "framer-motion";
import { fadeIn, fadeInDown, fadeInLeft } from "@/utils/animation";

const AboutUs = () => {
  const heroRef = useRef(null);
  const chooseUsRef = useRef(null);
  const moreInfoRef = useRef(null);
  const isHeroInView = useInView(heroRef, { margin: `-200px` });
  const isChooseUsInView = useInView(chooseUsRef, { margin: `-200px` });
  const isMoreInfoInView = useInView(moreInfoRef, { margin: `-200px` });

  const aboutNumRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const aboutCountRef = useRef<HTMLDivElement | null>(null);

  aboutNumRefs.current = Array.from(Array(4)).map(
    (_, index) => aboutNumRefs.current[index] || React.createRef()
  );

  function nCount() {
    aboutNumRefs.current.map((elementRef) => {
      const element = elementRef.current;
      const start = 0;
      let end = 0;
      const duration = 1000;
      let startTime = 0;
      if (element) {
        end = parseInt(element.textContent || "0");
      }
      function animateNumber(timeStamp: number) {
        if (!startTime) startTime = timeStamp;
        const progress = timeStamp - startTime;

        const percentage = Math.min(progress / duration, 1);

        const currentCount = Math.ceil(percentage * (end - start));

        if (elementRef.current) {
          elementRef.current.textContent = currentCount.toString();
        }

        if (progress < duration) {
          requestAnimationFrame(animateNumber);
        }
      }

      requestAnimationFrame(animateNumber);
    });
  }

  function handleIntersection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target === aboutCountRef.current) {
        nCount();
        observer.disconnect();
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection);

  useEffect(() => {
    if (aboutCountRef.current) {
      observer.observe(aboutCountRef.current);
    }
  }, []);
  return (
    <div className="pt-[var(--header-height)]">
      <div className="wrapper">
        <div className="text-center py-[40px]">
          <div className="font-logo text-sunny text-xl">DAT Travel</div>
          <div className="font-signikaBold text-sky text-4xl">Về chúng tôi</div>
        </div>

        {/* Introduce */}
        <div className="flex gap-[40px] items-center pb-[50px] max-md:flex-col-reverse">
          <div className="w-[45%] max-md:w-full flex flex-col gap-3">
            <div className="text-sky font-robotoBold text-lg">
              Hiểu hơn về chúng tôi
            </div>

            <div className="font-robotoBold text-3xl text-black">
              Công ty du lịch
              <br className="max-lg:block hidden" />
              <span className="font-signikaBold text-sunny"> DAT Travel</span>
            </div>

            <div className="text-grey text-sm">
              DAT Travel được thành lập vào năm 2014 bởi một nhóm đam mê du lịch
              với mục tiêu mang đến những trải nghiệm du lịch độc đáo và phong
              phú. Bắt đầu với các tour trong nước, công ty nhanh chóng mở rộng
              ra quốc tế, đa dạng hóa các tour từ mạo hiểm, nghỉ dưỡng đến gia
              đình và doanh nghiệp. Hiện nay, DAT Travel tự hào là lựa chọn tin
              cậy của hàng ngàn khách hàng, mang đến những hành trình an toàn và
              đáng nhớ với đội ngũ nhân viên chuyên nghiệp và nhiệt huyết.
            </div>

            <div className="flex flex-col gap-4" ref={aboutCountRef}>
              {statisticsAboutUs.map((statisticItem, index) => (
                <div
                  key={statisticItem.desc}
                  className="flex gap-2 items-center"
                >
                  <div
                    className="font-robotoBold text-3xl text-sky"
                    ref={aboutNumRefs.current[index]}
                  >
                    {statisticItem.number}
                  </div>
                  <div className="h-[35px] w-[4px] bg-sky opacity-40 rounded-full" />
                  <div>{statisticItem.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={heroRef} className="w-[55%] max-md:w-full ">
            <motion.div
              initial="hidden"
              animate={isHeroInView && "show"}
              variants={fadeIn(2, 1, 0)}
              className="w-full h-[400px] "
            >
              <img
                src="/img-section-about.webp"
                alt=""
                className="object-fill"
              />
            </motion.div>
          </div>
        </div>
        {/* --------------------------------------- */}

        {/* Choose us */}
        <div className="my-[40px]">
          <div className=" max-w-full text-center flex flex-col items-center gap-2 mb-6">
            <div className="font-robotoBold text-3xl">
              Hãy chọn
              <span className="font-signikaBold text-sunny "> DAT Travel</span>
            </div>

            <div className="max-w-[95%] w-[500px]">
              Cùng đến với 1.001 lý do bạn nên chọn chúng tôi DAT Travel. Có 1
              thế giới tuyệt vời đang chờ bạn khám phá cùng chúng tôi
            </div>

            <div className="max-w-full w-[700px] text-grey text-sm">
              Với hơn 5 năm tổ chức và triển khai các tour du lịch trong và
              ngoài nước, chúng tôi cam kết đem lại cho khách hàng những hành
              trình tuyệt vời, những kỉ niệm đáng nhớ thông qua những dịch vụ
              chuyên nghiệp mà chúng tôi thực hiện.
            </div>
          </div>

          <motion.div
            ref={chooseUsRef}
            className="grid grid-cols-3  max-md:grid-cols-2 gap-3 py-2 border-t-[2px] border-b-[2px] border-grey m-auto w-fit"
          >
            {strengthAboutUs.map((item, index) => (
              <motion.div
                initial="hidden"
                animate={isChooseUsInView && "show"}
                variants={fadeInLeft(1, index / 2, 1)}
                key={item.text}
                className="flex gap-2 items-center"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-4 h-4 text-sky"
                />
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* --------------------------------------- */}
      </div>
      {/* More Info */}
      <div className="bg-bgSection pb-[40px] pt-[70px] clip-path-around">
        <motion.div
          ref={moreInfoRef}
          className="wrapper flex justify-between gap-[30px] max-md:flex-col max-md:w-[370px] max-md:max-w-full"
        >
          {serviceHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              animate={isMoreInfoInView && "show"}
              variants={fadeInDown(1, index / 2, 1)}
              className="flex flex-col relative p-5 text-center bg-white border-sky border-[2px] rounded-[10px]"
            >
              <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-center bg-white p-2 w-fit h-fit rounded-full border-sky text-sky border-[2px] ">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-[20px] h-[20px]"
                />
              </div>

              <div className="text-sky font-robotoBold">{item.title}</div>

              <div className="text-grey mt-auto">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* --------------------------------------- */}
    </div>
  );
};

export default AboutUs;
