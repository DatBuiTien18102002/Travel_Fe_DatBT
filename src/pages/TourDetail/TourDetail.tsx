import { Col, Rate, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faPlaneUp,
  faBus,
  faTrain,
  faShip,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DescribeTour from "@/pages/TourDetail/components/DescribeTour";
import ScheduleTour from "@/pages/TourDetail/components/ScheduleTour";
import CommentsTour from "@/pages/TourDetail/components/CommentsTour";
import BookTourSideBar from "@/pages/TourDetail/components/BookTourSideBar";
import { useParams } from "react-router-dom";
import { useGetDetailTour } from "@/react-query/tourQuery";

const TourDetail = () => {
  const [activeInfo, setActiveInfo] = useState("describe");
  const { id } = useParams();
  const { data: res } = useGetDetailTour(id || "");
  const tour = res?.data;
  const renderInfoTour = (activeInfo: string) => {
    switch (activeInfo) {
      case "describe":
        return <DescribeTour desc={tour?.desc} />;
      case "schedule":
        return <ScheduleTour schedule={tour?.schedule} />;
      case "comments":
        return <CommentsTour />;
      default:
        return <></>;
    }
  };

  const renderTransportIcon = (transport: string) => {
    switch (transport) {
      case "Máy bay":
        return faPlaneUp;
      case "Tàu hỏa":
        return faTrain;
      case "Xe buýt du lịch":
        return faBus;
      case "Tàu thủy":
        return faShip;
      default:
        return undefined;
    }
  };

  return (
    <div className="pt-[var(--header-height)]">
      <div className="wrapper py-[40px]">
        <div className="text-3xl font-signikaBold text-sky">{tour?.name}</div>
        <div className="py-3 flex gap-2 items-center">
          <Rate
            disabled
            allowHalf
            defaultValue={tour?.rating}
            className="text-xl text-sky mb-[1px]"
          />
          <span className="font-robotoBold leading-none h-fit mt-[1px]">
            {tour?.rating}
          </span>
          <div className="mt-[2px]">
            (<span className="font-robotoBold ">{tour?.numRate} </span>đánh giá)
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
                {tour?.availableSeat || tour?.maxSeat}
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
              <div className="w-full h-[400px] rounded-[20px] overflow-hidden mb-[30px]">
                <img
                  src={tour?.photo ? tour?.photo : "/tour_img_default.jpg"}
                  alt=""
                />
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
  );
};

export default TourDetail;
