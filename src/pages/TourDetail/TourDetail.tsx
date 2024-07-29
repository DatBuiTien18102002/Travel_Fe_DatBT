import { Col, Rate, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faPlaneUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DescribeTour from "@/pages/TourDetail/components/DescribeTour";
import ScheduleTour from "@/pages/TourDetail/components/ScheduleTour";
import CommentsTour from "@/pages/TourDetail/components/CommentsTour";
import BookTourSideBar from "@/pages/TourDetail/components/BookTourSideBar";
import { useParams } from "react-router-dom";
import { useGetDetailTour } from "@/react-query/tourQuery";
import renderTransportIcon from "@/utils/renderTransportIcon";
import getAverageRating from "@/utils/getAverageRating";
import { TourDetailSkeleton } from "@/components/Skeleton";

const TourDetail = () => {
  const [activeInfo, setActiveInfo] = useState("describe");
  const { id } = useParams();
  const { data: res, isLoading } = useGetDetailTour(id || "");
  const tour = res?.data;
  const renderInfoTour = (activeInfo: string) => {
    switch (activeInfo) {
      case "describe":
        return <DescribeTour desc={tour?.desc} />;
      case "schedule":
        return <ScheduleTour schedule={tour?.schedule} />;
      case "comments":
        return <CommentsTour reviews={tour?.reviews} />;
      default:
        return <></>;
    }
  };

  return (
    <>
      {!isLoading ? (
        <div className="pt-[var(--header-height)]">
          <div className="wrapper py-[40px]">
            <div className="text-3xl font-signikaBold text-sky">
              {tour?.name}
            </div>
            <div className="py-3 flex gap-2 items-center">
              <Rate
                disabled
                allowHalf
                value={getAverageRating(tour?.reviews || [])}
                className="text-xl text-sky mb-[1px]"
              />
              <span className="font-robotoBold leading-none h-fit mt-[1px]">
                {getAverageRating(tour?.reviews || [])}
              </span>
              <div className="mt-[2px]">
                (
                <span className="font-robotoBold ">
                  {tour?.reviews?.length || 0}{" "}
                </span>
                đánh giá)
              </div>
            </div>

            <div className="flex gap-5 items-center flex-wrap">
              <div className="flex gap-2">
                <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-[15px] h-[15px] text-sky"
                  />
                </div>

                <div>
                  <div className="text-grey text-sm">Khởi hành từ</div>
                  <div className="text-sky text-sm">{tour?.depart}</div>
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
                  <div className="text-sky text-sm">{tour?.destination}</div>
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
                  <div className="text-sky text-sm">{tour?.timeTravel}</div>
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
                  <div className="text-grey text-sm">Số chỗ trống</div>
                  <div className="text-sky text-sm">
                    {tour?.availableSeat || 0}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                  <FontAwesomeIcon
                    icon={renderTransportIcon(tour?.transport) || faPlaneUp}
                    className={`w-[16px] h-[16px] text-sky ${
                      tour?.transport === "Máy bay" ? "rotate-45" : ""
                    }`}
                  />
                </div>

                <div>
                  <div className="text-grey text-sm">Di chuyển bằng</div>
                  <div className="text-sky text-sm">{tour?.transport}</div>
                </div>
              </div>
            </div>

            <div className="py-5">
              <Row gutter={30} className="gap-y-5">
                <Col span={24} lg={16}>
                  <div className="relative w-full h-[400px] rounded-[20px] overflow-hidden mb-[30px] flex-center">
                    <img
                      src={tour?.photo ? tour?.photo : "/tour_img_default.jpg"}
                      alt=""
                    />

                    {tour?.availableSeat === 0 && (
                      <>
                        <div className="absolute inset-0 bg-black opacity-[0.7]" />
                        <div className="absolute z-10 w-[150px] h-[150px] flex-center font-robotoBold text-xl text-white bg-sky rounded-full">
                          Hết chỗ trống
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex gap-[20px] w-full border-b-[4px] border-sky">
                    <div
                      onClick={() => {
                        setActiveInfo("describe");
                      }}
                      className={`w-[140px] h-[50px] px-5 flex-center bg-bgSection rounded-tl-[10px] rounded-tr-[10px] cursor-pointer  ${
                        activeInfo === "describe" ? "bg-sky text-white" : ""
                      }`}
                    >
                      <span className="font-robotoBold">Mô tả</span>
                    </div>
                    <div
                      onClick={() => {
                        setActiveInfo("schedule");
                      }}
                      className={`w-[140px] h-[50px] px-5 flex-center bg-bgSection rounded-tl-[10px] rounded-tr-[10px] cursor-pointer  ${
                        activeInfo === "schedule" ? "bg-sky text-white" : ""
                      }`}
                    >
                      <span className="font-robotoBold">Lịch trình</span>
                    </div>
                    <div
                      onClick={() => {
                        setActiveInfo("comments");
                      }}
                      className={`w-[140px] h-[50px] px-5 flex-center bg-bgSection rounded-tl-[10px] rounded-tr-[10px] cursor-pointer  ${
                        activeInfo === "comments" ? "bg-sky text-white" : ""
                      }`}
                    >
                      <span className="font-robotoBold">
                        Đánh giá tour ({tour?.reviews?.length})
                      </span>
                    </div>
                  </div>

                  <div className="shadow-tourInfo p-[30px]">
                    {renderInfoTour(activeInfo)}
                  </div>
                </Col>
                <Col span={24} lg={8}>
                  <BookTourSideBar tour={tour} />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ) : (
        <TourDetailSkeleton />
      )}
    </>
  );
};

export default TourDetail;
