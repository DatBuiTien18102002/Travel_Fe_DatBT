import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideBarAdmin from "@/pages/Admin/components/SidebarAdmin/SideBarAdmin";
import { useSelector } from "react-redux";
import { userType } from "@/types/types";

const Admin = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[2];
  const [activeBtn, setActiveBtn] = useState(currentPath);
  const [openSidebar, setOpenSidebar] = useState(true);
  const loginUser = useSelector((state: { user: userType }) => state.user);

  const toggleSideBar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleActiveBtnSidebar = (element: EventTarget) => {
    const target = element as HTMLElement;
    const button = target.closest("button");
    if (button) {
      setActiveBtn(button.name);
    }

    if (window.innerWidth <= 768 && openSidebar === true) {
      setOpenSidebar(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOpenSidebar(false);
    }
  }, []);

  useEffect(() => {
    setActiveBtn(currentPath);
  }, [currentPath]);

  return (
    <div className="relative w-[100vw] min-h-[100vh] ">
      <div
        className={`fixed top-0 left-0 bottom-0 w-[var(--sidebar-admin-w)] max-md:w-full overflow-hidden transition-[0.5s] z-[10] ${
          !openSidebar === true ? "!w-[var(--small-sidebar-admin-w)]" : ""
        }`}
      >
        <SideBarAdmin
          activeBtn={activeBtn}
          handleActiveBtnSidebar={handleActiveBtnSidebar}
        />
      </div>

      <div
        className={`absolute left-[var(--sidebar-admin-w)] max-md:left-[90vw] p-[25px] w-[--content-admin-w] transition-[3s] ${
          !openSidebar === true
            ? "!left-[var(--small-sidebar-admin-w)] w-[--large-content-admin-w]"
            : ""
        }`}
      >
        <div className="flex justify-between ">
          <div
            onClick={() => toggleSideBar()}
            className={`relative w-[40px] 
            h-[40px] flex-center rounded-full bg-sky text-white cursor-pointer z-[11] ${
              openSidebar === true
                ? "max-md:fixed max-md:top-[20px] max-md:right-[10px]"
                : ""
            }`}
          >
            <FontAwesomeIcon icon={faBars} className="w-[20px] h-[20px]" />
          </div>

          <Link
            to="/profile"
            className="w-[40px] h-[40px] rounded-full overflow-hidden border-[2px] border-sky-dark"
          >
            <img
              src={loginUser.avatar ? loginUser.avatar : "/avatar.jpg"}
              alt="avatar"
            />
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
