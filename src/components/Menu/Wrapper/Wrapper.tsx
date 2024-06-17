import { layoutProps } from "@/types/types";
import React from "react";

const Wrapper: React.FC<layoutProps> = ({ className, children }) => {
  return (
    <div
      className={`relative flex flex-col pt-2 min-h-[100px] bg-white shadow-menuShadow rounded-lg overflow-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
