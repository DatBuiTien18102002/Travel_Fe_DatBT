import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUsers,
  faMapLocationDot,
  faTicket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { sideBarAdminProps } from "@/types/types";
import { useDispatch } from "react-redux";
import { resetUser } from "@/redux/slice/userSlice";
import config from "@/config";

const SideBarAdmin = ({
  activeBtn,
  handleActiveBtnSidebar,
}: sideBarAdminProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut() {
    // logoutUser();
    // if (currentUser?.provider) {
    //   logoutSocialMedia();
    // }
    dispatch(resetUser());
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  }

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
          onClick={(e) => {
            handleActiveBtnSidebar(e.target);
            navigate(`/admin/${config.routes.dashboard}`);
          }}
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
          name="manager-user"
          onClick={(e) => {
            handleActiveBtnSidebar(e.target);
            navigate(`/admin/${config.routes.userManage}`);
          }}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap ${
            activeBtn === "manager-user" && "active"
          }`}
        >
          <FontAwesomeIcon
            icon={faUsers}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold mt-[4px]">Quản lý người dùng</p>
        </button>

        <button
          name="manager-tour"
          onClick={(e) => {
            handleActiveBtnSidebar(e.target);
            navigate(`/admin/${config.routes.tourManage}`);
          }}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap ${
            activeBtn === "manager-tour" && "active"
          }`}
        >
          <FontAwesomeIcon
            icon={faMapLocationDot}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold ">Quản lý Tour</p>
        </button>

        <button
          name="manager-booking"
          onClick={(e) => {
            handleActiveBtnSidebar(e.target);
            navigate(`/admin/${config.routes.bookingManage}`);
          }}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap ${
            activeBtn === "manager-booking" && "active"
          }`}
        >
          <FontAwesomeIcon
            icon={faTicket}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold">Quản lý đặt Tour</p>
        </button>

        <button
          onClick={() => handleLogOut()}
          className={`admin-sidebar-btn relative flex gap-6 items-center w-full text-white hover:text-sky hover:bg-white py-[10px] rounded-tl-[20px] rounded-bl-[20px] cursor-pointer whitespace-nowrap`}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="w-[20px] h-[20px] ml-[10px]"
          />

          <p className="font-robotoBold ">Đăng xuất</p>
        </button>
      </div>
    </div>
  );
};

export default SideBarAdmin;
