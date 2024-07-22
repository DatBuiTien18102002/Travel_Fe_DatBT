import { Collapse, CollapseProps } from "antd";

const ScheduleTour = ({
  schedule,
}: {
  schedule: {
    desc: {
      detail: string;
      timeOfDate: string;
      _id: string;
    }[];
    title: string;
    _id: string;
  }[];
}) => {
  console.log("schedule", schedule);
  const items: CollapseProps["items"] = schedule?.map((scheduleItem, index) => {
    return {
      key: index + 1,
      label: scheduleItem?.title,
      children: (
        <div>
          {scheduleItem?.desc?.map((descItem) => {
            return (
              <div key={descItem._id}>
                <p className="font-robotoBold">{descItem?.timeOfDate}</p>
                <p>{descItem?.detail}</p>
              </div>
            );
          })}
          {/* <p className="font-robotoBold">Buổi sáng </p>Quý khách tập trung tại
          sân bay Tân Sơn Nhất, làm thủ tục và khởi hành đến Đà Lạt bằng chuyến
          bay của Vietjet Air. <br /> Đến sân bay Liên Khương, xe và HDV địa
          phương đón đoàn và đưa đi ăn sáng.{" "}
          <p className="font-robotoBold">Buổi trưa</p> Đoàn dùng bữa trưa tại
          nhà hàng địa phương với các món ăn đặc sản Đà Lạt.
          <p className="font-robotoBold">Buổi chiều</p> Sau bữa trưa, đoàn di
          chuyển về khách sạn nhận phòng và nghỉ ngơi.{" "}
          <p className="font-robotoBold">Buổi tối</p> Quý khách ăn tối tại nhà
          hàng địa phương, thưởng thức các món ăn ngon và đặc trưng của Đà Lạt.{" "}
          <br /> Sau bữa tối, đoàn có thể tự do dạo chơi, khám phá chợ đêm Đà
          Lạt hoặc tham gia các hoạt động giải trí tại thành phố. <br />{" "}
          <span className="font-robotoBold">Bữa ăn:</span> Bữa sáng / Bữa trưa /
          Bữa tối */}
        </div>
      ),
    };
  });

  return <Collapse items={items} defaultActiveKey={["1"]} />;
};

export default ScheduleTour;
