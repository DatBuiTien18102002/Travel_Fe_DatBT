import { Skeleton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faPlaneUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const BookingHistoryDetailSkeleton = () => {
  return (
    <div className="mx-auto p-[20px] rounded-[10px] border-sky border-[2px] flex flex-col gap-5 max-w-[1000px] w-full">
      <div className="flex justify-between items-center gap-2 max-md:flex-col-reverse max-md:items-start">
        <div className="text-xl font-robotoBold w-[350px] text-overflow-2-line ">
          <Skeleton
            className="custom-skeleton custom-history-name"
            active
            paragraph={false}
            title={{ width: "100%" }}
          />
        </div>
        <div className="flex gap-1 text-sm">
          <div className="font-robotoBold">Thời gian đặt tour:</div>
          <div className="text-grey">
            <Skeleton
              className="custom-skeleton custom-history-name custom-h-xl"
              active
              paragraph={false}
              title={{ width: "116.66px" }}
            />
          </div>
        </div>
      </div>

      <div className="flex max-md:flex-col justify-between items-center gap-5 py-4 border-t-[2px] border-b-[2px] border-sky">
        <div className="max-md:w-full w-[40%]">
          <div className="relative max-md:h-[300px] h-[200px] overflow-hidden rounded-[10px]">
            <Skeleton.Image
              active
              className="custom-tour-image absolute inset-0"
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
                  <Skeleton
                    className="custom-skeleton custom-h-xl"
                    active
                    paragraph={false}
                    title={{ width: "100%" }}
                  />
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
                  <Skeleton
                    className="custom-skeleton custom-h-xl"
                    active
                    paragraph={false}
                    title={{ width: "100%" }}
                  />
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
                  <Skeleton
                    className="custom-skeleton custom-h-xl"
                    active
                    paragraph={false}
                    title={{ width: "100%" }}
                  />
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
                  <Skeleton
                    className="custom-skeleton custom-h-xl"
                    active
                    paragraph={false}
                    title={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="py-2 px-3 rounded-[10px] bg-bgSection h-fit">
                <FontAwesomeIcon
                  icon={faPlaneUp}
                  className={`w-[16px] h-[16px] text-sky rotate-45

                `}
                />
              </div>

              <div>
                <div className="text-grey text-sm">Di chuyển bằng</div>
                <div className="text-sky text-sm">
                  <Skeleton
                    className="custom-skeleton custom-h-xl"
                    active
                    paragraph={false}
                    title={{ width: "100%" }}
                  />
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
            <Skeleton
              className="custom-skeleton custom-history-price"
              active
              paragraph={false}
              title={{ width: "100px" }}
            />
          </span>
        </div>

        <div className="w-fit">
          <Skeleton
            className="custom-skeleton custom-history-price"
            active
            paragraph={false}
            title={{ width: "122px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryDetailSkeleton;
