import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whyUs } from "@/constants";

const WhyUs = () => {
  return (
    <section className="bg-bgSection py-[40px]">
      <div className="wrapper">
        <h2 className="title text-white text-center">
          Hãy đồng hành cùng <br className="sm:hidden" />
          <span className="font-logo text-sunny"> DAT Travel</span>
        </h2>

        <div className="mt-[40px]  flex justify-center">
          <div className="flex gap-[30px] justify-between max-md:flex-col w-fit">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex md:flex-col gap-4 items-center "
              >
                <div className="rounded-3xl bg-sky w-[60px] h-[60px] flex flex-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-[30px] h-[30px] text-white"
                  />
                </div>
                <div className="md:text-center">
                  <div className="font-robotoBold">{item.title}</div>
                  <div className="text-gray text-sm md:max-w-[180px] max-md:max-w-[300px]">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
