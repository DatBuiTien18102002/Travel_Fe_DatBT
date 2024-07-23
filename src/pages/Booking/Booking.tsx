import BookingForm from "@/forms/BookingForm";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import BookingSideBar from "@/pages/Booking/component/BookingSideBar";
import { useCreateBooking } from "@/react-query/bookingQuery";
import { useGetDetailTour } from "@/react-query/tourQuery";
import { useUpdateUser } from "@/react-query/userQuery";
import { updateUser } from "@/redux/slice/userSlice";
import {
  bookingForm,
  bookingType,
  responseType,
  tourType,
  userType,
} from "@/types/types";
import message from "@/utils/message";
import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const [isOpenConfirmForm, setIsOpenConfirmForm] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data: res } = useGetDetailTour(state?.tourId);
  const tour = res?.data;
  const dispatch = useDispatch();
  const currentUser = useSelector((state: { user: userType }) => state.user);
  const { mutateAsync: updateUserDB } = useUpdateUser();
  const { mutateAsync: createBooking } = useCreateBooking();
  const [valuesBooking, setValuesBooking] = useState<bookingForm>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleBookingForm = (values: bookingForm) => {
    setValuesBooking(values);
    setIsOpenConfirmForm(true);
  };

  const handleCheckUpdateUser = async () => {
    if (
      currentUser.name !== valuesBooking.name ||
      currentUser.email !== valuesBooking.email ||
      currentUser.address !== valuesBooking.address ||
      currentUser.phone !== valuesBooking.phone
    ) {
      const newUser = {
        ...currentUser,
        ...valuesBooking,
      };

      const resUpdateUser: responseType<userType> = await updateUserDB({
        ...valuesBooking,
        _id: currentUser._id,
        access_token: currentUser.access_token,
      });

      if (resUpdateUser.message) {
        const status = resUpdateUser.status.toString();
        if (status === "200" && resUpdateUser.data) {
          dispatch(updateUser(newUser));
          handleBookingTour();
        } else {
          message("error", resUpdateUser.message);
          return;
        }
      }

      return;
    }

    handleBookingTour();
  };

  const handleBookingTour = async () => {
    const numAdult = state?.seatBookingInfo.numAdult || 0;
    const numChild = state?.seatBookingInfo.numChild || 0;
    const numBaby = state?.seatBookingInfo.numBaby || 0;
    const totalSeat = numAdult + numChild + numBaby;
    const dataBooking = {
      userId: currentUser._id,
      tourId: state?.tourId,
      seat: {
        adultSeat: numAdult,
        childSeat: numChild,
        babySeat: numBaby,
        totalSeat: totalSeat,
      },
      price: state?.totalPrice || 0,
      dateStart: state?.dateTravel || "",
    };

    const resBooking: responseType<bookingType> = await createBooking(
      dataBooking
    );
    console.log("res booking", resBooking);
    if (resBooking.message) {
      const status = resBooking.status.toString();
      if (status === "200" && resBooking.data) {
        message("success", "Đặt tour thành công !");
        navigate("/bookingSuccess");
      } else {
        message("error", resBooking.message);
        return;
      }
    }
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
              <BookingSideBar tour={tour || {}} bookingInfo={state || {}} />
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
                onClick={() => {
                  handleCheckUpdateUser();
                  setIsOpenConfirmForm(false);
                }}
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
