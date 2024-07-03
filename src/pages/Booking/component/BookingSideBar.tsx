import React from "react";

const BookingSideBar = () => {
  return (
    <div>
      <div className="flex gap-3 mb-[10px]">
        <div className="w-[100px] h-[70px] rounded-[10px] overflow-hidden">
          <img src="/tour_img_default.jpg" alt="" />
        </div>

        <div className="text-overflow-2-line font-robotoBold h-fit flex-1">
          HCM - Đà Lạt - Đà Nẵng
        </div>
      </div>

      <div className="flex flex-col gap-2 py-[10px] border-t-[2px] border-b-[2px] border-sky ">
        <div className="flex justify-between">
          <div className="text-grey">Địa điểm khởi hành</div>
          <div className="font-robotoBold">Hồ Chí Minh</div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Thời gian tour</div>
          <div className="font-robotoBold">2 ngày 1 đêm</div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Ngày khởi hành</div>
          <div className="font-robotoBold">21/07/2024</div>
        </div>
        <div className="text-grey">Số khách:</div>
        <div className="flex justify-between">
          <div className="text-grey">Người lớn {`( >10 tuổi )`}</div>
          <div className="font-robotoBold">3 khách</div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Trẻ em {`( 2 - 10 tuổi )`}</div>
          <div className="font-robotoBold">2 khách</div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Trẻ nhỏ {`( < 2 tuổi )`}</div>
          <div className="font-robotoBold">1 khách</div>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="font-robotoBold text-2xl">Tổng tiền</div>
        <div className="text-sky font-robotoBold text-2xl">5.000.000 VND</div>
      </div>
    </div>
  );
};

export default BookingSideBar;
