import { SearchDetail } from "@/components";
import TourContent from "@/pages/Tours/components/TourContent/TourContent";
import TourHeading from "@/pages/Tours/components/TourHeading/TourHeading";
import TourSideBar from "@/pages/Tours/components/TourSideBar/TourSideBar";
import { Pagination } from "antd";

const Tours = () => {
  const getPageNumber = (page: number) => {
    console.log("page", page);
  };

  return (
    <div className="pt-[var(--header-height)]">
      <div className="wrapper py-[45px]">
        <div className="w-full flex items-center justify-center">
          <SearchDetail />
        </div>

        <div className="flex gap-5 mt-[20px]">
          <div className="w-0 hidden md:block md:w-[25%] lg:w-[20%]">
            <TourSideBar />
          </div>
          <div className="w-full md:w-[75%] lg:w-[80%]">
            <TourHeading />
            <TourContent />

            <div className="flex-center mt-[20px]">
              <Pagination
                onChange={getPageNumber}
                defaultCurrent={1}
                defaultPageSize={3}
                total={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
