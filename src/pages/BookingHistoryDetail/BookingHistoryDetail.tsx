import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faPlaneUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const BookingHistoryDetail = () => {
  return (
    <div className="pt-[var(--header-height)] wrapper ">
      <div className="py-[40px]">
        <div className="text-sky font-robotoBold text-4xl mb-[40px]">
          Chi tiết đặt tour
        </div>

        <div className="mx-auto p-[20px] rounded-[10px] border-sky border-[2px] flex flex-col gap-5 max-w-[1000px] w-full">
          <div className="flex justify-between items-center gap-2 max-md:flex-col-reverse max-md:items-start">
            <div className="text-xl font-robotoBold max-w-[350px] text-overflow-2-line ">
              HCM - Đà Lạt - Đà Nẵng - Hải Phòng
            </div>
            <div className="flex gap-1 text-sm">
              <div className="font-robotoBold">Thời gian đặt tour:</div>
              <div className="text-grey">12:36:11 25/6/2024</div>
            </div>
          </div>

          <div className="flex max-md:flex-col justify-between items-center gap-5 py-4 border-t-[2px] border-b-[2px] border-sky">
            <div className="max-md:w-full w-[40%]">
              <div className="max-md:h-[300px] h-[200px] overflow-hidden rounded-[10px]">
                <img src="/tour_img_default.jpg" alt="" />
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
                    <div className="text-grey text-sm">Số người</div>
                    <div className="text-sky text-sm">
                      6{" "}
                      <span className="text-black">{`(3 người lớn, 2 trẻ em, 1 trẻ nhỏ)`}</span>
                    </div>
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
            </div>
          </div>

          <div className="flex justify-between items-center gap-2 max-sm:flex-col max-sm:items-start">
            <div className="text-lg font-robotoBold">
              Thành tiền:{" "}
              <span className="text-sky font-robotoBold">5.000.000 VND</span>
            </div>

            <Button
              type="primary"
              className="!bg-sky text-white border-transparent border-[2px] hover:!bg-white hover:!text-sky hover:!border-sky hover:!border-[2px]"
            >
              Hủy đơn hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryDetail;
