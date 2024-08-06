import { Rate } from "antd";
import "../Comment";

const CommentItem = ({
  comment,
}: {
  comment: {
    commentDesc: string;
    commentRating: number;
    commentAvatar: string;
    commentName: string;
  };
}) => {
  return (
    <div>
      <div className="bg-white border-[3px] border-grey rounded-[20px] py-3 px-4 flex flex-col items-center gap-2 w-full scale-90 customComment">
        <p className="text-center text-sm min-h-[100px] text-overflow-5-line">
          {comment.commentDesc}
        </p>

        <div className="flex flex-col items-center gap-2 mt-auto">
          <Rate
            disabled
            defaultValue={comment.commentRating}
            className="text-sm text-sky"
          />

          <div className="w-[65px] h-[65px] rounded-full overflow-hidden">
            <img src={comment.commentAvatar} alt="" />
          </div>

          <div className="font-robotoBold">{comment.commentName}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
