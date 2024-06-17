import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@/components";

const HeaderUser = () => {
  const MENU_ITEMS = [
    {
      title: "Đăng nhập",
      to: "/login",
    },
    {
      title: "Đăng ký",
      to: "/sign-up",
    },
  ];

  //Lọc item null hoặc undefined
  const USER_MENU = [
    {
      title: "Manage System",
      to: "/admin",
    },
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
  ].filter((item) => item);

  function handleLogOut() {
    // logoutUser();
    // if (currentUser?.provider) {
    //   logoutSocialMedia();
    // }
    // dispatch(resetUser());
    // localStorage.removeItem("access_token");
    // localStorage.removeItem("refresh_token");
    // navigate("/");
  }

  return (
    <Menu items={MENU_ITEMS}>
      <FontAwesomeIcon icon={faUser} />
    </Menu>
  );
};

export default HeaderUser;
