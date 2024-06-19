import React from "react";

const Gallery = () => {
  return (
    <section className="py-[40px]">
      <div className="wrapper ">
        <div className="text-center">
          <h2 className="title">Hình ảnh chuyến đi</h2>
          <p className="text-grey">
            Hành trình tuyệt vời của bạn qua lăng kính của chúng tôi
          </p>
        </div>

        <div className="mt-[30px]">
          <div className="grid grid-rows-8 grid-cols-4 gap-4 md:w-[80%] max-md:w-full h-[800px] m-auto">
            <div className="col-span-2 row-span-4 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/gallery-04.jpg" alt="" />
            </div>
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/2.jpg" alt="" />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/1.jpg" alt="" />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/imgGallery3.webp" alt="" />
            </div>
            <div className="col-span-4 row-span-3 rounded-2xl overflow-hidden border-[2px] border-sky">
              <img src="/3.jpg" alt="" className="object-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
