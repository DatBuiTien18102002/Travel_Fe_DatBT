import { tourType } from "@/types/types";
import currencyFormat from "@/utils/currencyFormat";
import getPriceDiscount from "@/utils/getPriceDiscount";
import React from "react";
import { Link } from "react-router-dom";

const TourItem = ({ tour }: { tour: tourType }) => {
  let price = tour?.price || 0;
  if (tour?.price && tour?.discount) {
    price = getPriceDiscount(tour?.price, tour?.discount);
  }
  return (
    <Link
      to={`/tours/${tour._id}`}
      className="flex items-center py-[6px] px-4 cursor-pointer hover:bg-greyHover"
    >
      <img
        src={tour?.photo ? tour?.photo : "/tour_img_default.jpg"}
        alt="Hình ảnh"
        className="w-[40px] h-[40px] rounded-[5px] border-[2px] border-sky"
      />

      <div className="flex-1 ml-[12px]">
        <h4 className="text-sm font-robotoBold text-sky text-overflow-1-line max-w-[200px]">
          <span>{tour?.name}</span>
        </h4>
        <span className="text-sm text-grey">{currencyFormat(price)}</span>
      </div>
    </Link>
  );
};

export default TourItem;
