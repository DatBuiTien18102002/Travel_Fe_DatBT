import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";

const BookTourSideBar = () => {
  return (
    <div className="w-full bg-bgSection rounded-[10px] p-4 flex flex-col gap-1 lg:sticky lg:top-[var(--sticky-top)] max-lg:w-full">
      <div className="text-sky text-xl font-robotoBold ">
        Lịch trình và Giá Tour
      </div>

      <div>Chọn Lịch Trình và Xem Giá:</div>

      <div className="flex gap-2">
        <div className="w-[60px] h-[53px] flex-center rounded-[5px] bg-white cursor-pointer">
          25/08
        </div>
        <div className="w-[60px] h-[53px] flex-center rounded-[5px] bg-white cursor-pointer">
          01/09
        </div>
        <div className="w-[60px] h-[53px] flex-center rounded-[5px] bg-white cursor-pointer">
          15/09
        </div>
      </div>

      <div className="flex flex-col gap-2 my-2">
        <div className="px-2 py-1 flex justify-between bg-white rounded-[5px]">
          <div>
            <div>Người lớn</div>
            <div>{"> 10 tuối"}</div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-sky">x 7.000.000</div>
            <div className="flex gap-4 items-center">
              <button>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="text-lg font-robotoBold">2</button>
              <button>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-2 py-1 flex justify-between bg-white rounded-[5px]">
          <div>
            <div>Trẻ em</div>
            <div>{"2- 10 tuối"}</div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-sky">x 7.000.000</div>
            <div className="flex gap-4 items-center">
              <button>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="text-lg font-robotoBold">2</button>
              <button>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-2 py-1 flex justify-between bg-white rounded-[5px]">
          <div>
            <div>Trẻ nhỏ</div>
            <div>{"< 2 tuối"}</div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-sky">x 7.000.000</div>
            <div className="flex gap-4 items-center">
              <button>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="text-lg font-robotoBold">2</button>
              <button>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-sky gap-2 ">
        <FontAwesomeIcon icon={faCircleExclamation} />{" "}
        <p className="pt-1">Liên hệ để xác nhận chỗ</p>
      </div>

      <div className="flex justify-between">
        <div>Giá gốc</div>
        <div className="line-through">7.000.000 VND</div>
      </div>

      <div className="flex justify-between">
        <div>Giảm giá</div>
        <div>- 3.000.000 VND</div>
      </div>

      <div className="flex justify-between items-start">
        <div className="mt-[6px]">Tổng tiền</div>
        <div className="text-xl text-sky font-robotoBold">5.000.000 VND</div>
      </div>

      <div className="flex gap-4">
        <Button className="px-2 py-5 flex-1 font-robotoBold border-[2px] border-sky text-sky hover:!text-white hover:!bg-sky">
          Liên hệ tư vấn
        </Button>
        <Button className="px-2 py-5 flex-1 font-robotoBold border-[2px] border-transparent bg-sky text-white hover:!bg">
          Đặt Tour ngay
        </Button>
      </div>
    </div>
  );
};

export default BookTourSideBar;
