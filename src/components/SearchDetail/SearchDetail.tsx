import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faClock,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Select } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import message from "@/utils/message";
import { useGetUniqueValuesByAttr } from "@/react-query/tourQuery";

interface searchInfoProp {
  department: string | undefined;
  destination: string | undefined;
  duration: string | undefined;
}

const SearchDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [department, setDepartment] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [duration, setDuration] = useState<string | undefined>();
  const { data: allTimeTravel } = useGetUniqueValuesByAttr("timeTravel");

  const [searchInfo, setSearchInfo] = useState<searchInfoProp>({
    department: undefined,
    destination: undefined,
    duration: undefined,
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
    setDuration(value);
  };

  const handleSearch = () => {
    let limit = searchParams.get("limit");
    let page = searchParams.get("page");
    if (!limit && !page) {
      limit = "7";
      page = "1";
    }
    if (
      !searchInfo.department &&
      !searchInfo.destination &&
      !searchInfo.duration
    ) {
      message("error", "Bạn phải nhập ít nhất 1 thông tin để tìm kiếm !");
      return;
    }

    navigate(`/tours?limit=${limit}&page=${page}`, { state: { searchInfo } });
    setSearchInfo({
      department: undefined,
      destination: undefined,
      duration: undefined,
    });
    setDepartment("");
    setDestination("");
    setDuration(undefined);
  };

  return (
    <div className="flex py-3 px-2 shadow-searchDetail rounded-full w-fit max-md:mt-5 border-[1px]  border-sky max-sm:flex-col max-sm:w-full max-sm:rounded-lg max-sm:gap-3">
      <div className="flex-center gap-[11px] px-4 max-sm:justify-start">
        <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5 text-sky" />
        <div className="sm:max-w-[95px] max-sm:w-full">
          <div className="font-robotoBold text-sm">Điểm khởi hành</div>
          <input
            type="text"
            placeholder="Vd: HCM, Hà Nội, v.v. "
            className="w-full h-full border-none outline-none text-xs"
            name="department"
            value={department}
            onChange={(e) => {
              changeInfo(e.target);
              setDepartment(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex-center gap-[11px] px-4  border-sky sm:border-l-[1px] sm:border-r-[1px] max-sm:justify-start">
        <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-sky" />
        <div className="sm:max-w-[75px] max-sm:w-full">
          <div className="font-robotoBold text-sm">Điểm du lịch</div>
          <input
            type="text"
            placeholder="Vd: Đà Lạt, v.v."
            className="w-full h-full border-none outline-none text-xs"
            name="destination"
            value={destination}
            onChange={(e) => {
              changeInfo(e.target);
              setDestination(e.target.value);
            }}
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
            value={duration}
            onChange={handleChangeSelect}
            options={allTimeTravel?.data.map((item: string) => ({
              value: item,
              label: item,
            }))}
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
