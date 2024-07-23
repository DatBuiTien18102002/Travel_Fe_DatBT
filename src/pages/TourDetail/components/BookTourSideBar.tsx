import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { tourType } from "@/types/types";
import getPriceDiscount from "@/utils/getPriceDiscount";
import currencyFormat from "@/utils/currencyFormat";
import message from "@/utils/message";

const BookTourSideBar = ({ tour }: { tour: tourType }) => {
  const navigate = useNavigate();
  const [numAdult, setNumAdult] = useState(0);
  const [numChild, setNumChild] = useState(0);
  const [numBaby, setNumBaby] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dateTravel, setDateTravel] = useState("");

  let adultPrice = 0;
  let childPrice = 0;
  let babyPrice = 0;
  if (tour?.price && tour?.discount) {
    adultPrice = getPriceDiscount(tour?.price, tour?.discount);
    childPrice = adultPrice - (adultPrice * 50) / 100;
    babyPrice = adultPrice - (adultPrice * 90) / 100;
  }

  const handleMinus = (typeMinus: string) => {
    switch (typeMinus) {
      case "adult":
        if (numAdult === 0) {
          return;
        }
        setNumAdult((prev) => prev - 1);
        return;
      case "child":
        if (numChild === 0) {
          return;
        }
        setNumChild((prev) => prev - 1);
        return;
      case "baby":
        if (numBaby === 0) {
          return;
        }
        setNumBaby((prev) => prev - 1);
        return;
      default:
        return;
    }
  };

  const handlePlus = (typePlus: string) => {
    if (tour?.availableSeat) {
      switch (typePlus) {
        case "adult":
          setNumAdult((prev) => prev + 1);
          return;
        case "child":
          setNumChild((prev) => prev + 1);
          return;
        case "baby":
          setNumBaby((prev) => prev + 1);
          return;
        default:
          return;
      }
    }
  };

  const handleBookingTour = () => {
    console.log(dateTravel);
    if (dateTravel === "") {
      message("error", "Bạn cần chọn lịch trình trước khi đặt tour !");
      return;
    }

    if (totalPrice === 0) {
      message("error", "Bạn cần chọn số người tham gia trước khi đặt tour !");
      return;
    }

    const bookingInfo = {
      tourId: tour?._id,
      dateTravel,
      seatBookingInfo: {
        numAdult,
        numChild,
        numBaby,
      },
      totalPrice,
    };

    navigate("/booking", { state: bookingInfo });
  };

  useEffect(() => {
    const total =
      adultPrice * numAdult + childPrice * numChild + babyPrice * numBaby;
    setTotalPrice(total);
  }, [numAdult, numChild, numBaby]);

  return (
    <div className="w-full bg-bgSection rounded-[10px] p-4 flex flex-col gap-1 lg:sticky lg:top-[var(--sticky-top)] max-lg:w-full">
      <div className="text-sky text-xl font-robotoBold ">
        Lịch trình và Giá Tour
      </div>

      <div>Chọn Lịch Trình và Xem Giá:</div>

      <div className="date-sidebar-custom flex gap-2 overflow-auto pb-[5px]">
        {tour?.dateStart?.map((item: string) => (
          <div
            key={item}
            className={`w-[80px] font-robotoBold flex-shrink-0 h-[53px] flex-center rounded-[5px] bg-white cursor-pointer ${
              dateTravel === item ? "!bg-sky  text-white" : ""
            }`}
            onClick={() => setDateTravel(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 my-2">
        <div className="px-2 py-1 flex justify-between bg-white rounded-[5px]">
          <div>
            <div>Người lớn</div>
            <div>{"> 14 tuối"}</div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-sky">
              x {currencyFormat(adultPrice * numAdult)}
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleMinus("adult")}
                disabled={numAdult === 0}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <div className="text-lg font-robotoBold">{numAdult}</div>
              <button onClick={() => handlePlus("adult")}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-2 py-1 flex justify-between bg-white rounded-[5px]">
          <div>
            <div>Trẻ em</div>
            <div>{"6 - 14 tuối"}</div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-sky">
              x {currencyFormat(childPrice * numChild)}
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleMinus("child")}
                disabled={numChild === 0}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="text-lg font-robotoBold">{numChild}</button>
              <button onClick={() => handlePlus("child")}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-2 py-1 flex justify-between bg-white rounded-[5px]">
          <div>
            <div>Trẻ nhỏ</div>
            <div>{"< 6 tuối"}</div>
          </div>

          <div className="flex gap-5 items-center">
            <div className="text-sky">
              x {currencyFormat(babyPrice * numBaby)}
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleMinus("baby")}
                disabled={numBaby === 0}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="text-lg font-robotoBold">{numBaby}</button>
              <button onClick={() => handlePlus("baby")}>
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
        <div className="line-through">{currencyFormat(tour?.price || 0)}</div>
      </div>

      <div className="flex justify-between">
        <div>Giảm giá</div>
        <div>
          -{" "}
          {tour?.discount
            ? currencyFormat(((tour?.price || 0) * tour?.discount) / 100)
            : 0}
          {` (${tour?.discount || 0} %)`}
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div className="mt-[6px]">Tổng tiền</div>
        <div className="text-xl text-sky font-robotoBold">
          {currencyFormat(totalPrice)}
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={() => navigate("/contact")}
          className="px-2 py-5 flex-1 font-robotoBold border-[2px] border-sky text-sky hover:!text-white hover:!bg-sky"
        >
          Liên hệ tư vấn
        </Button>
        <Button
          onClick={() => handleBookingTour()}
          className="px-2 py-5 flex-1 font-robotoBold border-[2px] border-transparent bg-sky text-white hover:!bg"
        >
          Đặt Tour ngay
        </Button>
      </div>
    </div>
  );
};

export default BookTourSideBar;
