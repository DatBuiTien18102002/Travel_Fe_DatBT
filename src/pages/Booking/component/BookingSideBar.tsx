import { tourType } from "@/types/types";
import currencyFormat from "@/utils/currencyFormat";

const BookingSideBar = ({
  tour,
  bookingInfo,
}: {
  tour: tourType;
  bookingInfo: {
    dateTravel: string;
    totalPrice: number;
    seatBookingInfo: {
      numChild: number;
      numAdult: number;
      numBaby: number;
    };
  };
}) => {
  return (
    <div>
      <div className="flex gap-3 mb-[10px]">
        <div className="w-[100px] h-[70px] rounded-[10px] overflow-hidden">
          <img
            src={tour?.photo ? tour.photo : "/tour_img_default.jpg"}
            alt=""
          />
        </div>

        <div className="text-overflow-2-line font-robotoBold h-fit flex-1">
          {tour?.name}
        </div>
      </div>

      <div className="flex flex-col gap-2 py-[10px] border-t-[2px] border-b-[2px] border-sky ">
        <div className="flex justify-between">
          <div className="text-grey">Địa điểm khởi hành</div>
          <div className="font-robotoBold">{tour?.depart}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Thời gian tour</div>
          <div className="font-robotoBold">{tour?.timeTravel}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Ngày khởi hành</div>
          <div className="font-robotoBold">{bookingInfo.dateTravel}</div>
        </div>
        <div className="text-grey">Số khách:</div>
        <div className="flex justify-between">
          <div className="text-grey">Người lớn {`( >14 tuổi )`}</div>
          <div className="font-robotoBold">
            {bookingInfo.seatBookingInfo.numAdult || 0} khách
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Trẻ em {`( 6 - 14 tuổi )`}</div>
          <div className="font-robotoBold">
            {bookingInfo.seatBookingInfo.numChild || 0} khách
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-grey">Trẻ nhỏ {`( < 6 tuổi )`}</div>
          <div className="font-robotoBold">
            {bookingInfo.seatBookingInfo.numBaby || 0} khách
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="font-robotoBold text-2xl">Tổng tiền</div>
        <div className="text-sky font-robotoBold text-2xl">
          {currencyFormat(bookingInfo.totalPrice)}
        </div>
      </div>
    </div>
  );
};

export default BookingSideBar;
