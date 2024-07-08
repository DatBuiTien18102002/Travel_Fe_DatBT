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

const TourDetail = () => {
  const [activeInfo, setActiveInfo] = useState("describe");

  const renderInfoTour = (activeInfo: string) => {
    switch (activeInfo) {
      case "describe":
        return <DescribeTour />;
      case "schedule":
        return <ScheduleTour />;
      case "comments":
        return <CommentsTour />;
      default:
        return <></>;
    }
  };

  return (
    <div className="pt-[var(--header-height)]">
      <div className="wrapper py-[40px]">
        <div className="text-3xl font-signikaBold text-sky">
          Tour Đà Lạt: HCM - Thác Datanla - SamTen Hills - Langbiang
        </div>
        <div className="py-3 flex gap-2 items-center">
          <Rate
            disabled
            allowHalf
            defaultValue={3.7}
            className="text-xl text-sky mb-[1px]"
          />
          <span className="font-robotoBold leading-none h-fit mt-[1px]">
            3.7
          </span>
          <div className="mt-[2px]">
            (<span className="font-robotoBold ">5 </span>đánh giá)
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
              <div className="text-sky text-sm">Hà Nội</div>
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
              <div className="text-sky text-sm">Đà Lạt</div>
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
              <div className="text-sky text-sm">5N4Đ</div>
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
              <div className="text-sky text-sm">5</div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
              <FontAwesomeIcon
                icon={faPlaneUp}
                className="w-[16px] h-[16px] text-sky rotate-45"
              />
            </div>

            <div>
              <div className="text-grey text-sm">Di chuyển bằng</div>
              <div className="text-sky text-sm">Máy bay</div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <Row gutter={30} className="gap-y-5">
            <Col span={24} lg={16}>
              <div className="w-full h-[400px] rounded-[20px] overflow-hidden mb-[30px]">
                <img src="/imgTourDetailDemo.jpg" alt="" />
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
                  <span className="font-robotoBold">Đánh giá tour (5)</span>
                </div>
              </div>

              <div className="shadow-tourInfo p-[30px]">
                {renderInfoTour(activeInfo)}
              </div>
            </Col>
            <Col span={24} lg={8}>
              <BookTourSideBar />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;