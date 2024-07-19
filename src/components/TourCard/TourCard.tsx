import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Rate } from "antd";
import { useLocation } from "react-router-dom";
import { tourType } from "@/types/types";
import currencyFormat from "@/utils/currencyFormat";
import getPriceDiscount from "@/utils/getPriceDiscount";

const TourCard = ({ tour }: { tour: tourType }) => {
  const { pathname } = useLocation();
  let availableSeat = 0;
  if (tour?.maxSeat && tour?.currentSeat !== undefined) {
    availableSeat = tour?.maxSeat - tour?.currentSeat;
  }

  return (
    <div
      className={`relative rounded-[10px] bg-white shadow-tourCard transition-all will-change-transform cursor-pointer hover:shadow-tourCardHover w-full border-[2px] border-sky ${
        pathname === "/" ? "scale-[0.9] hover:scale-95 " : "hover:scale-105"
      }`}
    >
      {tour?.discount ? (
        <div className="absolute top-[10px] left-[10px] py-1 px-4 rounded-full bg-sky-dark text-white text-xs">
          {tour?.discount}%
        </div>
      ) : (
        " "
      )}

      <div
        className="pt-[70%] rounded-tl-[10px] rounded-tr-[10px] bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${tour?.photo})` }}
      />

      <div className="p-[10px] flex flex-col gap-1">
        <div className="flex gap-1 text-xs text-grey">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>
            Khởi hành từ:{" "}
            <span className="text-sky font-robotoBold">{tour?.depart}</span>
          </p>
        </div>

        <div className="font-robotoBold text-overflow-2-line text-lg">
          {tour?.name}
        </div>

        <Rate
          disabled
          defaultValue={tour?.rating}
          className="text-sm text-sky"
        />

        <div className="flex gap-2">
          <div className="font-robotoBold text-sky flex items-end leading-none">
            {tour?.discount
              ? currencyFormat(
                  getPriceDiscount(tour?.price || 0, tour?.discount || 0)
                )
              : currencyFormat(tour?.price || 0)}
          </div>
          {tour?.discount ? (
            <div className="text-xs text-grey line-through flex items-end leading-none">
              {currencyFormat(tour?.price || 0)}
            </div>
          ) : (
            " "
          )}
        </div>

        <div className="flex gap-1 text-sm text-grey">
          <FontAwesomeIcon icon={faClock} />
          <p>
            Thời gian:{" "}
            <span className="text-sky font-robotoBold">{tour?.timeTravel}</span>
          </p>
        </div>

        <div className="flex gap-1 text-sm text-grey">
          <FontAwesomeIcon icon={faUsers} />
          <p>
            Số chỗ còn:{" "}
            <span className="text-sky font-robotoBold">{availableSeat}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
