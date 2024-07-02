import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CommentsTour = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center py-2 first:pt-0 border-b-[1px] last:border-b-[0px] border-grey">
        <div className="flex gap-3 ">
          <div className="rounded-full w-[30px] h-[30px] overflow-hidden">
            <img src="/avatar.jpg" alt="" />
          </div>

          <div>
            <div className="font-robotoBold text-lg leading-none">
              Bùi Tiến Đạt
            </div>
            <div className="text-sm text-grey mb-2">30-9-2024</div>
            <div>Tour thật tuyệt vời</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="font-robotoBold leading-none mt-[2px]">4.7</div>
          <FontAwesomeIcon icon={faStar} className="text-sky" />
        </div>
      </div>

      <div className="flex justify-between items-center py-2 first:pt-0 border-b-[1px] last:border-b-[0px] border-grey">
        <div className="flex gap-3 ">
          <div className="rounded-full w-[30px] h-[30px] overflow-hidden">
            <img src="/avatar.jpg" alt="" />
          </div>

          <div>
            <div className="font-robotoBold text-lg leading-none">
              Bùi Tiến Đạt
            </div>
            <div className="text-sm text-grey mb-2">30-9-2024</div>
            <div>Tour thật tuyệt vời</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="font-robotoBold leading-none mt-[2px]">4.7</div>
          <FontAwesomeIcon icon={faStar} className="text-sky" />
        </div>
      </div>

      <div className="flex justify-between items-center py-2 first:pt-0 border-b-[1px] last:border-b-[0px] border-grey">
        <div className="flex gap-3 ">
          <div className="rounded-full w-[30px] h-[30px] overflow-hidden">
            <img src="/avatar.jpg" alt="" />
          </div>

          <div>
            <div className="font-robotoBold text-lg leading-none">
              Bùi Tiến Đạt
            </div>
            <div className="text-sm text-grey mb-2">30-9-2024</div>
            <div>Tour thật tuyệt vời</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="font-robotoBold leading-none mt-[2px]">4.7</div>
          <FontAwesomeIcon icon={faStar} className="text-sky" />
        </div>
      </div>

      <div className="flex justify-between items-center py-2 first:pt-0 border-b-[1px] last:border-b-[0px] border-grey">
        <div className="flex gap-3 ">
          <div className="rounded-full w-[30px] h-[30px] overflow-hidden">
            <img src="/avatar.jpg" alt="" />
          </div>

          <div>
            <div className="font-robotoBold text-lg leading-none">
              Bùi Tiến Đạt
            </div>
            <div className="text-sm text-grey mb-2">30-9-2024</div>
            <div>Tour thật tuyệt vời</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="font-robotoBold leading-none mt-[2px]">4.7</div>
          <FontAwesomeIcon icon={faStar} className="text-sky" />
        </div>
      </div>
    </div>
  );
};

export default CommentsTour;
