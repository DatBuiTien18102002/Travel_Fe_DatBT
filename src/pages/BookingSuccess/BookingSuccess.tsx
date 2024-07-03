import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-[var(--header-height)]">
      <div className="mx-auto mb-[40px] flex-center flex-col wrapper text-center">
        <div className="overflow-hidden ">
          <img src="/thankyouimg.jpg" alt="" />
        </div>
        <div className="mt-[-40px] flex-center flex-col gap-3">
          <div className="text-sky font-signikaBold text-4xl">
            Đặt tour thành công
          </div>
          <div className="font-robotoBold text-xl max-w-[400px]">
            Xin chân thành cảm ơn vì đã sử dụng dịch vụ của chúng tôi
          </div>
          <div className="text-grey max-w-[500px]">
            Sau khi đặt hàng thành công bạn có thể đến cơ sở gần nhất để tiến
            hành thanh toán và nhận vé trước 3 ngày khi chuyến đi khởi hành
          </div>

          <div className="flex gap-5">
            <Button onClick={() => navigate("/")}>Quay về trang chủ</Button>
            <Button onClick={() => navigate("/bookingHistory")} type="primary">
              Xem lịch sử Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
