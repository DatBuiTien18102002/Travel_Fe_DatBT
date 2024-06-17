import { Link } from "react-router-dom";
import { menuItemProps } from "@/types/types";

function MenuItem({ data }: menuItemProps) {
  const classes = `text-sm text-black py-[11px] px-[16px] hover:bg-grayHover hover:bg-grayHover w-full leading-7 font-robotoBold ${
    data.separate && "border-solid border-t-[2px] border-[#1618231e]"
  }`;

  return data.to ? (
    <Link className={classes} to={data.to ? data.to : "/"}>
      <span className="mr-2 flex-center w-6">{data.icon}</span>
      {data.title}
    </Link>
  ) : (
    <button className={classes} onClick={() => data?.onClick && data.onClick()}>
      <span className="mr-2 flex-center w-6 ">{data.icon}</span>
      {data.title}
    </button>
  );
}

export default MenuItem;
