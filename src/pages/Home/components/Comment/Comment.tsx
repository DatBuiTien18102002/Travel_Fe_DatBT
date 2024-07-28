import "./CustomSlick.css";
import Slider from "react-slick";
import CommentItem from "./CommentItem/CommentItem.tsx";
import "./Comment";
import { highlightComment } from "@/constants.ts";

const Comment = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="Comment"
      className="comment bg-bgSection pt-[40px] w-full pb-[60px]"
    >
      <div className="wrapper">
        <div className="text-center">
          <h2 className="title text-white">Khách hàng đánh giá</h2>
          <p className="text-grey">
            Mục tiêu hàng đầu của chúng tôi là sự hài lòng của khách hàng
          </p>
        </div>

        <div className="mt-5">
          <div className="slider-container">
            <Slider {...settings}>
              {highlightComment.map(
                (comment: {
                  commentDesc: string;
                  commentRating: number;
                  commentAvatar: string;
                  commentName: string;
                }) => (
                  <CommentItem key={comment.commentName} comment={comment} />
                )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
