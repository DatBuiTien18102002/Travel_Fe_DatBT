import config from "@/config";
import { Link, useLocation } from "react-router-dom";
import { headerPage, sectionMenu } from "@/constants";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper } from "@/components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import BarsButton from "../BarsButton/BarsButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileNav from "../MobileNav/MobileNav";
import { fadeIn, sideBarAnimate } from "@/utils/animation";

const HeaderNav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(true);

  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <motion.div
        className="max-md:flex flex-col flex-center rounded-full bg-white text-sky md:hidden"
        animate={open ? "show" : "hidden"}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black opacity-[0.4] z-[999]"
              variants={fadeIn(1, 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onClick={() => toggleSideBar()}
            />
          )}
        </AnimatePresence>
        <motion.div
          className="fixed top-0 left-0 bottom-0 w-[70%] bg-white z-[999]"
          variants={sideBarAnimate()}
        >
          <MobileNav setOpen={setOpen} />
        </motion.div>
        <BarsButton open={open} setOpen={toggleSideBar} color="#259bd9" />
      </motion.div>

      <Link to={config.routes.home}>
        <div className="font-bold font-logo lg:text-4xl max-lg:text-3xl max-md:hidden leading-none text-sunny pb-2">
          DAT Travel
        </div>
      </Link>

      <nav className="flex items-center h-full  lg:gap-[25px] max-lg:gap-[15px] lg:text-xl max-lg:text-base max-md:hidden">
        {pathname === "/" ? (
          <HeadlessTippy
            interactive
            render={(attrs) => (
              <div tabIndex={-1} {...attrs}>
                <Wrapper>
                  {sectionMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="px-5 py-[10px] text-sm font-robotoBold font-bold text-black hover:bg-greyHover"
                    >
                      {item.title}
                    </a>
                  ))}
                </Wrapper>
              </div>
            )}
          >
            <Link to={config.routes.home}>
              <div className="font-cloudy font-bold flex items-center text-orange">
                Home
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="pl-1 text-xl text-orange "
                />
              </div>
            </Link>
          </HeadlessTippy>
        ) : (
          <Link to={config.routes.home}>
            <div className="font-cloudy font-bold">Home</div>
          </Link>
        )}

        {headerPage.map((item) => (
          <Link to={item.href} key={item.href}>
            <div
              className={`font-cloudy font-bold ${
                item.href === pathname && "text-orange"
              }`}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default HeaderNav;
