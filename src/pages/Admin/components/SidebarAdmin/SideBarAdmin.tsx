import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faMapLocationDot,
  faTicket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { sideBarAdminProps } from "@/types/types";

const SideBarAdmin = ({
  activeBtn,
  handleActiveBtnSidebar,
}: sideBarAdminProps) => {
  return (
    <div
      className={` bg-sky border-l-[10px] border-l-sky py-[25px] w-full h-full`}
    >
      <div className="flex gap-4 items-center w-full text-white mb-[40px] whitespace-nowrap">
        <img src="/icon.svg" alt="" className="w-[40px] h-[40px]" />

        <div className="font-logo text-3xl">DAT Travel</div>
      </div>

      <div className="flex flex-col">
        <button
          name="dashboard"
          onClick={(e) => handleActiveBtnSidebar(e.target)}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap ${
            activeBtn === "dashboard" && "active"
          }`}
        >
          <FontAwesomeIcon
            icon={faHouse}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold ">Bảng điều khiển</p>
        </button>

        <button
          name="user"
          onClick={(e) => handleActiveBtnSidebar(e.target)}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap ${
            activeBtn === "user" && "active"
          }`}
        >
          <FontAwesomeIcon
            icon={faUsers}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold mt-[4px]">Quản lý người dùng</p>
        </button>

        <button
          name="tour"
          onClick={(e) => handleActiveBtnSidebar(e.target)}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap ${
            activeBtn === "tour" && "active"
          }`}
        >
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold ">Quản lý Tour</p>
        </button>

        <button
          name="booked"
          onClick={(e) => handleActiveBtnSidebar(e.target)}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap ${
            activeBtn === "booked" && "active"
          }`}
        >
          <FontAwesomeIcon
            icon={faTicket}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold">Quản lý đặt Tour</p>
        </button>

        <Link
          to="/sign-in"
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap`}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold ">Đăng xuất</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBarAdmin;
