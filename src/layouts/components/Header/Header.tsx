import Search from "./components/Search/Search";
import HeaderUser from "./components/HeaderUser/HeaderUser";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  const changeBgFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("!bg-header");
      } else {
        headerRef.current?.classList.remove("!bg-header");
      }
    });
  };

  useEffect(() => {
    changeBgFunc();

    return () => {
      window.removeEventListener("scroll", changeBgFunc);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 flex-center w-full h-[var(--header-height)] ${
        pathname === "/" ? "bg-transparent" : "bg-sky"
      }  z-[900] transition-all`}
    >
      <div className="wrapper flex-row-between text-white gap-3">
        <HeaderNav />

        <div className="flex gap-5 items-center ">
          <Search />

          <div className="text-2xl ">
            <HeaderUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
