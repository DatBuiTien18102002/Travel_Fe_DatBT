import { Button, Rate } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faPlaneUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBooking,
  useGetBookingDetail,
  useUpdateBooking,
} from "@/react-query/bookingQuery";
import { useGetDetailTour, useUpdateTour } from "@/react-query/tourQuery";
import { format } from "date-fns";
import renderTransportIcon from "@/utils/renderTransportIcon";
import currencyFormat from "@/utils/currencyFormat";
import { responseType, reviewType, tourType, userType } from "@/types/types";
import message from "@/utils/message";
import { useState } from "react";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import TextArea from "antd/es/input/TextArea";
import { useCreateReview } from "@/react-query/reviewQuery";
import { useSelector } from "react-redux";

const BookingHistoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id booking detail", id);
  const { data: resBooking } = useGetBookingDetail(id || "");
  const currentUser = useSelector((state: { user: userType }) => state.user);
  const { mutateAsync: deleteBooking } = useDeleteBooking();
  const [isOpenReviewForm, setIsOpenReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const { data: resTour } = useGetDetailTour(resBooking?.data?.tourInfo || "");
  const { mutateAsync: createReview } = useCreateReview();
  const { mutateAsync: updateBooking } = useUpdateBooking();
  const { mutateAsync: updateTour } = useUpdateTour();

  let formattedDateBooking = "";
  const ratingText = ["Kinh khủng", "Tệ", "Bình thường", "Tốt", "Tuyệt vời"];

  if (resBooking?.data?.createdAt) {
    formattedDateBooking = format(
      new Date(resBooking.data.createdAt),
      "HH:mm:ss dd/MM/yyyy"
    );
  }

  const handleDeleteBooking = async () => {
    const res: responseType<tourType> = await deleteBooking(id || "");
    if (res.message) {
      const status = res.status.toString();
      if (status === "200") {
        message("success", res.message);
        navigate("/bookingHistory");
      } else {
        message("error", res.message);
      }
    }
  };

  const renderButtonStatus = (status: string) => {
    switch (status) {
      case "waiting_confirm":
        return (
          <Button
            type="primary"
            className="!bg-sky text-white border-transparent border-[2px] hover:!bg-white hover:!text-sky hover:!border-sky hover:!border-[2px]"
            onClick={() => handleDeleteBooking()}
          >
            Hủy đơn hàng
          </Button>
        );

      case "confirm_booking":
        return (
          <div className="flex gap-1">
            <span className="font-robotoBold">Trạng thái:</span>
            <div className="text-sky font-robotoBold">Chờ thanh toán</div>
          </div>
        );
      case "booking_success":
        if (!resBooking?.data?.isRating) {
          return (
            <Button
              type="primary"
              className="!bg-sky text-white border-transparent border-[2px] hover:!bg-white hover:!text-sky hover:!border-sky hover:!border-[2px]"
              onClick={() => setIsOpenReviewForm(true)}
            >
              Đánh giá tour
            </Button>
          );
        }
        return <></>;
      default:
        return;
    }
  };

  const handleReview = async () => {
    const reviewRes: responseType<reviewType> = await createReview({
      tourId: resTour?.data?._id || "",
      userId: currentUser._id,
      avatar: currentUser.avatar || "",
      username: currentUser.name || currentUser.email || "",
      reviewText: reviewText,
      rating: rating,
    });

    if (reviewRes.message) {
      const status = reviewRes.status.toString();
      if (status === "200" && reviewRes.data) {
        message("success", reviewRes.message);
        await updateTour({
          id: resTour?.data?._id,
          data: {
            reviews: [...(resTour?.data?.reviews || []), reviewRes?.data._id],
          },
        });

        await updateBooking({
          id: resBooking?.data?._id,
          data: {
            isRating: true,
          },
        });
      } else {
        message("error", reviewRes.message);
      }
    }

    console.log("reviewRes", reviewRes);
  };

  return (
    <>
      <div className="pt-[var(--header-height)] wrapper ">
        <div className="py-[40px]">
          <div className="text-sky font-robotoBold text-4xl mb-[40px]">
            Chi tiết đặt tour
          </div>

          <div className="mx-auto p-[20px] rounded-[10px] border-sky border-[2px] flex flex-col gap-5 max-w-[1000px] w-full">
            <div className="flex justify-between items-center gap-2 max-md:flex-col-reverse max-md:items-start">
              <div className="text-xl font-robotoBold max-w-[350px] text-overflow-2-line ">
                {resTour?.data?.name}
              </div>
              <div className="flex gap-1 text-sm">
                <div className="font-robotoBold">Thời gian đặt tour:</div>
                <div className="text-grey">{formattedDateBooking}</div>
              </div>
            </div>

            <div className="flex max-md:flex-col justify-between items-center gap-5 py-4 border-t-[2px] border-b-[2px] border-sky">
              <div className="max-md:w-full w-[40%]">
                <div className="max-md:h-[300px] h-[200px] overflow-hidden rounded-[10px]">
                  <img
                    src={
                      resTour?.data?.photo
                        ? resTour?.data?.photo
                        : "/tour_img_default.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>

              <div className="max-md:w-full w-[60%]">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex gap-2">
                    <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="w-[15px] h-[15px] text-sky"
                      />
                    </div>

                    <div>
                      <div className="text-grey text-sm">Khởi hành từ</div>
                      <div className="text-sky text-sm">
                        {resTour?.data?.depart}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="w-[15px] h-[15px] text-sky"
                      />
                    </div>

                    <div>
                      <div className="text-grey text-sm">Điểm đến</div>
                      <div className="text-sky text-sm">
                        {resTour?.data?.destination}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="w-[15px] h-[15px] text-sky"
                      />
                    </div>

                    <div>
                      <div className="text-grey text-sm">Thời gian</div>
                      <div className="text-sky text-sm">
                        {resTour?.data?.timeTravel}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="w-[15px] h-[15px] text-sky"
                      />
                    </div>

                    <div>
                      <div className="text-grey text-sm">Số người</div>
                      <div className="text-sky text-sm">
                        {resBooking?.data?.seat?.totalSeat}{" "}
                        <span className="text-black">{`(${resBooking?.data?.seat?.adultSeat} người lớn, ${resBooking?.data?.seat?.childSeat} trẻ em, ${resBooking?.data?.seat?.babySeat} trẻ nhỏ)`}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                      <FontAwesomeIcon
                        icon={
                          renderTransportIcon(resTour?.data?.transport) ||
                          faPlaneUp
                        }
                        className={`w-[16px] h-[16px] text-sky ${
                          resTour?.data?.transport === "Máy bay"
                            ? "rotate-45"
                            : ""
                        }`}
                      />
                    </div>

                    <div>
                      <div className="text-grey text-sm">Di chuyển bằng</div>
                      <div className="text-sky text-sm">
                        {resTour?.data?.transport}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center gap-2 max-sm:flex-col max-sm:items-start">
              <div className="text-lg font-robotoBold">
                Thành tiền:{" "}
                <span className="text-sky font-robotoBold">
                  {currencyFormat(resBooking?.data?.price || 0)}
                </span>
              </div>

              {renderButtonStatus(resBooking?.data?.status)}
            </div>
          </div>
        </div>
      </div>

      {isOpenReviewForm && (
        <ModalFormLayout>
          <div className="flex flex-col gap-4 w-[450px] max-w-full">
            <div className="text-2xl text-sky font-signikaBold">
              Đánh giá tour
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-robotoBold">{resTour?.data?.name} </p>
              <Rate
                tooltips={ratingText}
                onChange={setRating}
                value={rating}
                allowClear={true}
              />

              <TextArea
                rows={4}
                value={reviewText}
                onChange={(e) => {
                  setReviewText(e.target.value);
                }}
                placeholder="Mời bạn đánh giá về tour"
              />
            </div>

            <div className="flex justify-end w-full gap-2 font-robotoBold">
              <Button
                onClick={() => setIsOpenReviewForm(false)}
                className="px-3 py-2 "
              >
                Hủy
              </Button>
              <Button
                onClick={() => {
                  handleReview();
                  setIsOpenReviewForm(false);
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

export default BookingHistoryDetail;
