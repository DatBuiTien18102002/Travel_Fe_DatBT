import { layoutProps } from "@/types/types";
import React from "react";

const ModalFormLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-[1000] ">
      <div className="w-full h-full bg-black opacity-70" />

      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-[90%] max-w-[90%] rounded-[20px] bg-white p-[20px]">
        {children}
      </div>
    </div>
  );
};

export default ModalFormLayout;
