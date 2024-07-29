import { TextLoading, TourCard } from "@/components";
import { TourCardSkeleton } from "@/components/Skeleton";

import { tourType } from "@/types/types";
import { Row, Col } from "antd";
import { useSearchParams } from "react-router-dom";

const TourContent = ({
  tours = [],
  totalPage,
  loading,
}: {
  tours: tourType[];
  totalPage: number;
  loading: boolean;
}) => {
  const [searchParams] = useSearchParams();
  let currentPage = searchParams.get("page");
  if (currentPage === null) {
    currentPage = "1";
  }

  return (
    <>
      {!loading ? (
        +currentPage <= +totalPage ? (
          <div className="relative">
            <Row gutter={[16, 16]}>
              {tours?.map((item) => {
                return (
                  <Col key={item.name} lg={6} sm={8} span={12}>
                    <TourCard tour={item} />
                  </Col>
                );
              })}
            </Row>
          </div>
        ) : (
          <div className="max-h-[700px] flex-center ">
            <img
              src="/not-found_tour-page.png"
              alt=""
              className="w-[300px] h-[300px]"
            />
          </div>
        )
      ) : (
        <Row gutter={[16, 16]}>
          {Array.from(Array(7))?.map((_, index) => {
            return (
              <Col key={index} lg={6} sm={8} span={12}>
                <TourCardSkeleton />
              </Col>
            );
          })}
        </Row>
      )}

      {/* {loading && (
        // <div className="absolute inset-0  flex-center">
        //   <div className="w-full h-full opacity-[0.4] bg-black rounded-[10px]" />
        //   <TextLoading fontSize="text-2xl" color="text-white" />
        // </div>
        <Row gutter={[16, 16]}>
          {Array.from(Array(7))?.map((index) => {
            return (
              <Col key={index} lg={6} sm={8} span={12}>
                <TourCardSkeleton />
              </Col>
            );
          })}
        </Row>
      )} */}
    </>
  );
};

export default TourContent;
