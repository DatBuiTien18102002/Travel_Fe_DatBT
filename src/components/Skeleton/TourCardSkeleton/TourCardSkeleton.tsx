import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Rate, Skeleton } from "antd";
import "../SkeletonCustom.css";

const TourCardSkeleton = () => {
  return (
    <div
      className={`rounded-[10px] bg-white shadow-tourCard transition-all will-change-transform hover:shadow-tourCardHover w-full border-[2px] border-sky`}
    >
      <div className="relative pt-[70%] rounded-tl-[10px] rounded-tr-[10px] bg-no-repeat bg-cover bg-center ">
        <Skeleton.Image active className="custom-tour-image absolute inset-0" />
      </div>

      <div className="p-[10px] flex flex-col gap-1">
        <div className="flex text-grey gap-1">
          <FontAwesomeIcon icon={faLocationDot} />
          <Skeleton
            className="custom-skeleton custom-h-sm"
            active
            paragraph={false}
            title={{ width: "100%" }}
          />
        </div>

        <div className=" mt-2">
          <Skeleton
            className="custom-skeleton custom-tour-name"
            active
            paragraph={false}
            title={{ width: "100%" }}
          />
        </div>

        <div className="mt-[2px]">
          <Rate
            disabled
            allowHalf
            defaultValue={0}
            className="text-sm text-sky"
          />
        </div>

        <div className="flex gap-2 mb-[2px]">
          <Skeleton
            className="custom-skeleton custom-h-sm"
            active
            paragraph={false}
            title={{ width: "100%" }}
          />
        </div>

        <div className="flex gap-1 text-grey mt-[-2px]">
          <FontAwesomeIcon icon={faClock} />
          <Skeleton
            className="custom-skeleton "
            active
            paragraph={false}
            title={{ width: "100%" }}
          />
        </div>

        <div className="flex gap-1 text-grey mt-[4px] mb-[4px]">
          <FontAwesomeIcon icon={faUsers} />
          <Skeleton
            className="custom-skeleton"
            active
            paragraph={false}
            title={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TourCardSkeleton;
