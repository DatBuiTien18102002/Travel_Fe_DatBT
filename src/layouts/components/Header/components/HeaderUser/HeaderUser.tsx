import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { menuItemProps, userType } from "@/types/types";
import { resetUser } from "@/redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const HeaderUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector((state: { user: userType }) => state.user);
  const MENU_ITEMS: menuItemProps["data"][] = [
    {
      title: "Đăng nhập",
      to: "/sign-in",
    },
    {
      title: "Đăng ký",
      to: "/sign-up",
    },
  ];

  const USER_MENU: menuItemProps["data"][] = [
    {
      title: "View profile",
      to: "/profile",
    },
    {
      title: "My orders",
      to: "/my-orders",
    },
    {
      title: "Log out",
      onClick: handleLogOut,
      separate: true,
    },
  ];

  const getMenu = () => {
    if (loginUser._id) {
      if (loginUser.isAdmin) {
        USER_MENU.unshift({
          title: "Manage System",
          to: "/admin",
        });
      }
      return USER_MENU;
    } else {
      return MENU_ITEMS;
    }
  };

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
    <Menu items={getMenu()}>
      {loginUser._id ? (
        <img
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.src = "/avatar.jpg";
          }}
          className="w-[36px] h-[36px] border-[2px] border-sky-dark rounded-full"
          src={loginUser.avatar ? loginUser.avatar : "/avatar.jpg"}
        />
      ) : (
        <FontAwesomeIcon icon={faUser} />
      )}
    </Menu>
  );
};

export default HeaderUser;
