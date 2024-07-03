import BookingForm from "@/forms/BookingForm";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import BookingSideBar from "@/pages/Booking/component/BookingSideBar";
import { bookingForm } from "@/types/types";
import message from "@/utils/message";
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [isOpenConfirmForm, setIsOpenConfirmForm] = useState(false);
  const navigate = useNavigate();

  const handleBookingForm = (values: bookingForm) => {
    console.log("Booking form", values);
    setIsOpenConfirmForm(true);
  };

  const handleBookingTour = () => {
    console.log("Handle booking");
    message("success", "Đặt tour thành công !");
    navigate("/profile");
  };

  return (
    <>
      <div className="pt-[var(--header-height)] my-[20px] wrapper">
        <div className="flex gap-5 max-md:flex-col-reverse">
          <div className="w-[65%] max-lg:w-[50%] max-md:w-full">
            <div className="font-robotoBold text-sky text-2xl mb-[20px]">
              Thông tin liên hệ
            </div>
            <div className="py-[38px] px-4 border-[2px] border-sky rounded-[10px] w-full">
              <BookingForm handleBookingForm={handleBookingForm} />
            </div>
          </div>
          <div className="w-[35%] max-lg:w-[50%] max-md:w-full">
            <div className="font-robotoBold text-sky text-2xl mb-[20px]">
              Thông tin đặt tour
            </div>
            <div className="py-3 px-4 border-[2px] border-sky rounded-[10px] w-full">
              <BookingSideBar />
            </div>
          </div>
        </div>
      </div>

      {isOpenConfirmForm && (
        <ModalFormLayout>
          <div className="flex flex-col gap-4">
            <div className="font-robotoBold text-lg ">Xác nhận đặt tour</div>
            <div>
              Xác nhận thanh toán:{" "}
              <span className="text-sky font-robotoBold">5.000.000đ</span>
            </div>

            <div className="flex justify-end w-full gap-2 font-robotoBold">
              <Button
                onClick={() => setIsOpenConfirmForm(false)}
                className="px-3 py-2 "
              >
                Hủy
              </Button>
              <Button
                onClick={() => handleBookingTour()}
                className="bg-sky px-3 py-2 text-white"
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </ModalFormLayout>
      )}
    </>
  );
};

export default Booking;
