import config from "@/config";
import { headerPage, sectionMenu } from "@/constants";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { delayItemAnimate, slideToRight } from "@/utils/animation";

const MobileNav = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  return (
    <motion.div
      className={`w-full h-full flex-center flex-col text-2xl gap-[30px]`}
      variants={delayItemAnimate()}
    >
      {pathname === "/" ? (
        <div className="flex-center flex-col">
          <motion.div
            variants={slideToRight()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={config.routes.home}>
              <div className="font-cloudy font-bold text-orange">Home</div>
            </Link>
          </motion.div>

          <motion.div
            variants={slideToRight()}
            className="flex-center flex-col "
          >
            {sectionMenu.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="px-5 py-[10px] font-robotoBold font-bold text-lg"
                variants={slideToRight()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.a>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          variants={slideToRight()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={config.routes.home}>
            <div className="font-cloudy font-bold">Home</div>
          </Link>
        </motion.div>
      )}
      {headerPage.map((item) => (
        <motion.div
          key={item.href}
          variants={slideToRight()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={item.href} key={item.href}>
            <div
              className={`font-cloudy font-bold ${
                item.href === pathname && "text-orange"
              }`}
            >
              {item.title}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MobileNav;
