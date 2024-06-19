import { Rate } from "antd";
import "../Comment";

const CommentItem = () => {
  return (
    <div>
      <div className="bg-white border-[3px] border-grey rounded-[20px] py-3 px-4 flex flex-col items-center gap-2 w-full scale-90 customComment">
        <p className="text-center text-sm">
          "Dịch vụ rất tuyệt vời. Mình đã có một chuyến đi cực kì đáng nhớ. Rất
          may mắn khi lựa chọn ND Travel cho chuyến đi lần này."
        </p>

        <div className="flex flex-col items-center gap-2 mt-auto">
          <Rate disabled defaultValue={4} className="text-sm text-sky" />

          <div className="w-[65px] h-[65px] rounded-full overflow-hidden">
            <img src="/user.jpg" alt="" />
          </div>

          <div className="font-robotoBold">Phan Tấn Trung</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
