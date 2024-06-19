import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faClock,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";

const SearchDetail = () => {
  const [searchInfo, setSearchInfo] = useState({
    department: "",
    destination: "",
    duration: "",
  });

  const changeInfo = (info: HTMLInputElement | HTMLSelectElement) => {
    setSearchInfo((prev) => ({
      ...prev,
      [info.name]: info.value,
    }));
  };

  const handleChangeSelect = (value: string) => {
    setSearchInfo((prev) => ({
      ...prev,
      duration: value,
    }));
  };

  const handleSearch = () => {
    //Check nếu cả 3 trường thông báo dữ liệu không có thì hiện thông báo phải nhập ít nhất 1 trường
    console.log(searchInfo);
  };

  return (
    <div className="flex py-3 shadow-searchDetail rounded-full w-fit max-md:mt-5 border-[1px]  border-sky max-sm:flex-col max-sm:w-[60%] max-sm:rounded-lg max-sm:gap-3">
      <div className="flex-center gap-[11px] px-4 max-sm:justify-start">
        <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5 text-sky" />
        <div className="sm:max-w-[90px] max-sm:w-full">
          <div className="font-robotoBold text-sm">Điểm khởi hành</div>
          <input
            type="text"
            placeholder="Nhập điểm đi"
            className="w-full h-full border-none outline-none text-xs"
            name="department"
            onChange={(e) => changeInfo(e.target)}
          />
        </div>
      </div>

      <div className="flex-center gap-[11px] px-4  border-sky sm:border-l-[1px] sm:border-r-[1px] max-sm:justify-start">
        <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-sky" />
        <div className="sm:max-w-[75px] max-sm:w-full">
          <div className="font-robotoBold text-sm">Điểm du lịch</div>
          <input
            type="text"
            placeholder="Nhập nơi du lịch"
            className="w-full h-full border-none outline-none text-xs"
            name="destination"
            onChange={(e) => changeInfo(e.target)}
          />
        </div>
      </div>

      <div className="flex-center px-4 max-sm:justify-start">
        <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-sky" />
        <div className="max-sm:w-full">
          <div className="font-robotoBold text-sm pl-[11px]">
            Thời gian du lịch
          </div>
          <Select
            placeholder="Chọn thời gian"
            onChange={handleChangeSelect}
            options={[
              { value: "1N", label: "1 ngày" },
              { value: "2N1D", label: "2 ngày 1 đêm" },
              { value: "3N2D", label: "3 ngày 2 đêm" },
              { value: "5N3D", label: "5 ngày 3 đêm" },
              { value: "1W", label: "1 tuần" },
            ]}
            className="custom-select-introduce"
          />
        </div>
      </div>

      <button
        onClick={() => handleSearch()}
        className="py-2 px-3 sm:mr-4 bg-sky sm:rounded-tl-[10px] sm:rounded-br-[10px] sm:rounded-tr-[5px] sm:rounded-bl-[5px] max-sm:w-[90%] max-sm:m-auto max-sm:rounded-full"
      >
        <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default SearchDetail;
