import { Collapse, CollapseProps } from "antd";
import React from "react";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Ngày 1: HCM - Đà Lạt",
    children: (
      <div>
        <p className="font-robotoBold">Buổi sáng </p>Quý khách tập trung tại sân
        bay Tân Sơn Nhất, làm thủ tục và khởi hành đến Đà Lạt bằng chuyến bay
        của Vietjet Air. <br /> Đến sân bay Liên Khương, xe và HDV địa phương
        đón đoàn và đưa đi ăn sáng. <p className="font-robotoBold">Buổi trưa</p>{" "}
        Đoàn dùng bữa trưa tại nhà hàng địa phương với các món ăn đặc sản Đà
        Lạt.
        <p className="font-robotoBold">Buổi chiều</p> Sau bữa trưa, đoàn di
        chuyển về khách sạn nhận phòng và nghỉ ngơi.{" "}
        <p className="font-robotoBold">Buổi tối</p> Quý khách ăn tối tại nhà
        hàng địa phương, thưởng thức các món ăn ngon và đặc trưng của Đà Lạt.{" "}
        <br /> Sau bữa tối, đoàn có thể tự do dạo chơi, khám phá chợ đêm Đà Lạt
        hoặc tham gia các hoạt động giải trí tại thành phố. <br />{" "}
        <span className="font-robotoBold">Bữa ăn:</span> Bữa sáng / Bữa trưa /
        Bữa tối
      </div>
    ),
  },
  {
    key: "2",
    label: "Ngày 2: Thác Datanla - Samten Hills",
    children: (
      <div>
        <p className="font-robotoBold">Buổi sáng </p>Quý khách tập trung tại sân
        bay Tân Sơn Nhất, làm thủ tục và khởi hành đến Đà Lạt bằng chuyến bay
        của Vietjet Air. <br /> Đến sân bay Liên Khương, xe và HDV địa phương
        đón đoàn và đưa đi ăn sáng. <p className="font-robotoBold">Buổi trưa</p>{" "}
        Đoàn dùng bữa trưa tại nhà hàng địa phương với các món ăn đặc sản Đà
        Lạt.
        <p className="font-robotoBold">Buổi chiều</p> Sau bữa trưa, đoàn di
        chuyển về khách sạn nhận phòng và nghỉ ngơi.{" "}
        <p className="font-robotoBold">Buổi tối</p> Quý khách ăn tối tại nhà
        hàng địa phương, thưởng thức các món ăn ngon và đặc trưng của Đà Lạt.{" "}
        <br /> Sau bữa tối, đoàn có thể tự do dạo chơi, khám phá chợ đêm Đà Lạt
        hoặc tham gia các hoạt động giải trí tại thành phố. <br />{" "}
        <span className="font-robotoBold">Bữa ăn:</span> Bữa sáng / Bữa trưa /
        Bữa tối
      </div>
    ),
  },
  {
    key: "3",
    label: "Ngày 3: Đỉnh Langbiang - HCM",
    children: (
      <div>
        <p className="font-robotoBold">Buổi sáng </p>Quý khách tập trung tại sân
        bay Tân Sơn Nhất, làm thủ tục và khởi hành đến Đà Lạt bằng chuyến bay
        của Vietjet Air. <br /> Đến sân bay Liên Khương, xe và HDV địa phương
        đón đoàn và đưa đi ăn sáng. <p className="font-robotoBold">Buổi trưa</p>{" "}
        Đoàn dùng bữa trưa tại nhà hàng địa phương với các món ăn đặc sản Đà
        Lạt.
        <p className="font-robotoBold">Buổi chiều</p> Sau bữa trưa, đoàn di
        chuyển về khách sạn nhận phòng và nghỉ ngơi.{" "}
        <p className="font-robotoBold">Buổi tối</p> Quý khách ăn tối tại nhà
        hàng địa phương, thưởng thức các món ăn ngon và đặc trưng của Đà Lạt.{" "}
        <br /> Sau bữa tối, đoàn có thể tự do dạo chơi, khám phá chợ đêm Đà Lạt
        hoặc tham gia các hoạt động giải trí tại thành phố. <br />{" "}
        <span className="font-robotoBold">Bữa ăn:</span> Bữa sáng / Bữa trưa /
        Bữa tối
      </div>
    ),
  },
];

const ScheduleTour = () => {
  return <Collapse items={items} defaultActiveKey={["1"]} />;
};

export default ScheduleTour;
