import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Rate } from "antd";

const TourCard = () => {
  return (
    <div className="relative rounded-[10px] bg-white shadow-tourCard transition-all will-change-transform cursor-pointer scale-[0.9] hover:scale-95 hover:shadow-tourCardHover w-full border-[2px] border-sky">
      <div className="absolute top-[10px] left-[10px] py-1 px-4 rounded-full bg-sky-dark text-white text-xs">
        20%
      </div>

      <div
        className="pt-[70%] rounded-tl-[10px] rounded-tr-[10px] bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(/introduce1.jpg)` }}
      />

      <div className="p-[10px] flex flex-col gap-2">
        <div className="flex gap-1 text-xs text-gray">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>
            Khởi hành từ:{" "}
            <span className="text-sky font-robotoBold">Hồ Chí Minh</span>
          </p>
        </div>

        <div className="font-robotoBold text-overflow">HCM - Đà Lạt</div>

        <Rate disabled defaultValue={4} className="text-sm text-sky" />

        <div className="flex gap-2">
          <div className="font-robotoBold text-sky flex items-end leading-none">
            1.150.000đ
          </div>
          <div className="text-xs text-gray line-through flex items-end leading-none">
            1.700.000đ
          </div>
        </div>

        <div className="flex gap-1 text-xs text-gray">
          <FontAwesomeIcon icon={faClock} />
          <p>
            Thời gian: <span className="text-sky font-robotoBold">2N1Đ</span>
          </p>
        </div>

        <div className="flex gap-1 text-xs text-gray">
          <FontAwesomeIcon icon={faUsers} />
          <p>
            Số chỗ còn: <span className="text-sky font-robotoBold">12</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
