import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { reviewType } from "@/types/types";
import { format } from "date-fns";
import getAverageRating from "@/utils/getAverageRating";
import { Pagination } from "antd";

const CommentsTour = ({ reviews = [] }: { reviews?: reviewType[] }) => {
  const limit = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(2);
  const handleChangePaginate = (page: number) => {
    setCurrentPage(page);
  };

  const currentCommentList = () => {
    const begin = currentLimit * (currentPage - 1);
    const end = currentLimit * currentPage - 1;

    return reviews?.filter((_, index) => index >= begin && index <= end);
  };

  const handleMoreComment = () => {
    let newLimit = currentLimit + 2;
    if (newLimit > limit) {
      newLimit = limit;
    }
    setCurrentLimit(newLimit);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {currentCommentList().map((review: reviewType) => {
          const formattedDateBooking = format(
            new Date(review?.createdAt || ""),
            "HH:mm:ss dd/MM/yyyy"
          );
          return (
            <div
              key={review._id}
              className="flex justify-between items-center py-2 first:pt-0 border-b-[1px] last:border-b-[0px] border-grey"
            >
              <div className="flex gap-3 ">
                <div className="rounded-full w-[30px] h-[30px] overflow-hidden">
                  <img
                    src={review?.avatar ? review?.avatar : "/avatar.jpg"}
                    alt=""
                  />
                </div>

                <div>
                  <div className="font-robotoBold text-lg leading-none">
                    {review?.username}
                  </div>
                  <div className="text-sm text-grey mb-2 mt-1">
                    {formattedDateBooking}
                  </div>
                  <div>{review?.reviewText}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="font-robotoBold leading-none mt-[2px]">
                  {review.rating}
                </div>
                <FontAwesomeIcon icon={faStar} className="text-sky" />
              </div>
            </div>
          );
        })}
      </div>

      {currentLimit === limit || currentLimit >= reviews?.length ? (
        <div className="flex-center mt-4">
          <Pagination
            onChange={handleChangePaginate}
            defaultCurrent={1}
            current={currentPage}
            pageSize={limit}
            total={reviews.length}
          />
        </div>
      ) : (
        <div
          className="text-sky underline text-center cursor-pointer"
          onClick={handleMoreComment}
        >
          Xem thêm
        </div>
      )}
    </>
  );
};

export default CommentsTour;
