import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { TourCard } from "@/components";
import Slider from "react-slick";
import "./CustomSlick.css";
import { useGetTours } from "@/react-query/tourQuery";
import { tourType } from "@/types/types";
import { TourCardSkeleton } from "@/components/Skeleton";

const Discover = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: tours, isLoading } = useGetTours({ limit: 6 });
  return (
    <section id="Discover" className="py-[40px] w-full ">
      <div
        className="wrapper bg-center bg-cover"
        style={{ backgroundImage: "url(/background-discover.webp)" }}
      >
        <div className="flex items-center justify-between mb-[50px]">
          <div>
            <h2 className="title">Tour du lịch phổ biến</h2>
            <div className="text-grey">
              Hơn 1.000 tour đa dạng giá hời có hạn
            </div>
          </div>

          <Link
            to="/tours"
            className="text-sky flex items-center gap-3 max-md:hidden"
          >
            <span>Xem thêm</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <Slider {...settings}>
          {!isLoading
            ? tours?.data?.map((tourItem: tourType) => {
                return (
                  <div key={tourItem.name}>
                    <TourCard tour={tourItem} />
                  </div>
                );
              })
            : Array.from(Array(7))?.map((_, index) => {
                return (
                  <div key={index}>
                    <TourCardSkeleton />
                  </div>
                );
              })}
        </Slider>
      </div>
    </section>
  );
};

export default Discover;
