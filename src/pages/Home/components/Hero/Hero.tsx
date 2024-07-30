import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="Hero"
      className="relative h-[100vh] max-h-[var(--max-section-h)] bg-hero bg-no-repeat bg-cover bg-center"
    >
      <div className="position inset-0 w-full h-full bg-black opacity-60 " />

      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-center flex-col gap-4 text-white">
        <img src="/icon.svg" className="w-[50px] h-[50px]" alt="" />
        <p className="font-logo font-bold max-md:text-xl md:text-2xl">
          DAT Travel
        </p>
        <h1 className="max-md:text-3xl md:text-5xl font-signikaBold font-bold ">
          Thế Giới Trong Tầm Tay
        </h1>
        <p className="text-center w-[570px]  max-sm:w-[300px] max-md:text-base md:text-lg">
          Khám phá vẻ đẹp thiên nhiên, văn hóa đa dạng và trải nghiệm không thể
          quên. <br /> Bắt đầu hành trình của bạn ngay hôm nay.
        </p>
        <button
          className="md:px-4 md:py-3 max-md:px-3 max-md:py-2 bg-sky text-white rounded-full hover:scale-110 transition-transform"
          onClick={() => navigate("/about-us")}
        >
          Tìm hiểu ngay
        </button>
      </div>
    </section>
  );
};

export default Hero;
