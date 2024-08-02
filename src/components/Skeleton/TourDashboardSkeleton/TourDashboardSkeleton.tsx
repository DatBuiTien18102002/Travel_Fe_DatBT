import { Skeleton } from "antd";

const TourDashboardSkeleton = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded-[5px] w-[30px] h-[30px] overflow-hidden">
        <Skeleton.Image active />
      </div>

      <div className="flex flex-col gap-1 overflow-hidden flex-1">
        <div className="font-robotoBold  text-overflow-1-line">
          <Skeleton
            className="custom-skeleton"
            active
            paragraph={false}
            title={{ width: "224px" }}
          />
        </div>
        <div className="text-grey text-xs text-overflow-1-line">
          <Skeleton
            className="custom-skeleton custom-h-xs"
            active
            paragraph={false}
            title={{ width: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TourDashboardSkeleton;
