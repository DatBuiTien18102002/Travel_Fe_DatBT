import React from "react";

const Partner = () => {
  return (
    <section className="py-[40px] bg-bgSection">
      <div className="wrapper">
        <div className="text-center mb-[30px]">
          <h2 className="title text-white">
            Đồng hành cùng
            <span className="font-logo text-sunny"> DAT Travel</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-between max-md:w-[500px] max-w-full m-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Partner;
