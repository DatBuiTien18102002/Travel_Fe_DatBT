import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Select } from "antd";

const TourHeading = () => {
  const handleChangeSelect = (value: string) => {
    console.log(value);
  };

  return (
    <div className="flex items-center justify-between mb-[30px] px-[12px] py-[15px] rounded-[10px] bg-bgSection border-[1px] border-sky max-sm:flex-col max-sm:gap-3">
      <div className="m-0 text-xl font-robotoBold hidden md:block">
        Tất cả sản phẩm
      </div>

      <Select
        placeholder="Phân Loại"
        className="min-w-[200px] max-sm:min-w-full hidden max-md:block"
        onChange={handleChangeSelect}
        options={[
          { value: "1N", label: "1 ngày" },
          { value: "2N1D", label: "2 ngày 1 đêm" },
          { value: "3N2D", label: "3 ngày 2 đêm" },
          { value: "5N3D", label: "5 ngày 3 đêm" },
          { value: "1W", label: "1 tuần" },
        ]}
      />

      <Select
        placeholder="Sắp xếp"
        className="min-w-[200px] max-sm:min-w-full hidden max-md:block"
        onChange={handleChangeSelect}
        options={[
          { value: "1N", label: "1 ngày" },
          { value: "2N1D", label: "2 ngày 1 đêm" },
          { value: "3N2D", label: "3 ngày 2 đêm" },
          { value: "5N3D", label: "5 ngày 3 đêm" },
          { value: "1W", label: "1 tuần" },
        ]}
      />

      <div className="flex items-center max-sm:hidden">
        <div>Trang: </div>
        <div className="mr-[22px] ml-[4px] flex ">
          <div className="text-sky">1</div>/<div>3</div>
        </div>
        <div className="hidden md:flex items-center gap-[10px]">
          <Button className="py-2 px-3 bg-sky text-white">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button className="py-2 px-3 bg-sky text-white">
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourHeading;
