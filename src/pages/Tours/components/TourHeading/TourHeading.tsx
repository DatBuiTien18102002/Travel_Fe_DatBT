import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Select } from "antd";
import { useGetUniqueValuesByAttr } from "@/react-query/tourQuery";
import { tourHeadingProps } from "@/types/types";

const TourHeading = ({
  currentPage,
  totalPage,
  handleNextPage,
  handlePrevPage,
  sortList,
  handleSelectSortClick,
  handleSelectFilterClick,
}: tourHeadingProps) => {
  const sortSelectArray = sortList.map((sortItem) => ({
    label: <span>{sortItem.title}</span>,
    title: sortItem.title,
    options: sortItem.options.map((optionItem) => ({
      label: <span>{optionItem.label}</span>,
      value: optionItem.value,
    })),
  }));

  const { data: allDepart } = useGetUniqueValuesByAttr("depart");
  const { data: allTimeTravel } = useGetUniqueValuesByAttr("timeTravel");

  return (
    <div className="flex items-center justify-between mb-[30px] px-[12px] py-[15px] rounded-[10px] bg-bgSection border-[1px] border-sky max-sm:flex-col max-sm:gap-3">
      <div className="m-0 text-xl font-robotoBold hidden md:block">
        Danh sách tour
      </div>

      <Select
        placeholder="Lọc tour"
        className="min-w-[200px] max-sm:min-w-full hidden max-md:block"
        onChange={handleSelectFilterClick}
        options={[
          {
            label: <span>Tất cả</span>,
            title: "Tất cả",
            value: "",
          },
          {
            label: <span>Điểm khởi hành</span>,
            title: "Điểm khởi hành",
            options: allDepart?.data?.map((item: string) => ({
              label: <span>{item}</span>,
              value: `depart,${item}`,
            })),
          },
          {
            label: <span>Thời gian du lịch</span>,
            title: "Thời gian du lịch",
            options: allTimeTravel?.data?.map((item: string) => ({
              label: <span>{item}</span>,
              value: `timeTravel,${item}`,
            })),
          },
        ]}
      />

      <Select
        placeholder="Sắp xếp"
        className="min-w-[200px] max-sm:min-w-full hidden max-md:block"
        onChange={handleSelectSortClick}
        options={[
          {
            label: <span>Tất cả</span>,
            title: "Tất cả",
            value: "",
          },
          ...sortSelectArray,
        ]}
      />

      <div className="flex items-center max-sm:hidden">
        <div>Trang: </div>
        <div className="mr-[22px] ml-[4px] flex ">
          <div className="text-sky">{currentPage}</div>/
          <div>{totalPage || 1}</div>
        </div>
        <div className="hidden md:flex items-center gap-[10px]">
          <Button
            className="py-2 px-3 bg-sky text-white"
            onClick={() => handlePrevPage()}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button
            className="py-2 px-3 bg-sky text-white"
            onClick={() => handleNextPage()}
            disabled={currentPage === totalPage}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourHeading;
