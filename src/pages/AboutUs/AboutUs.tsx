import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faSuitcaseRolling,
  faHourglassHalf,
  faHotel,
  faCheck,
  faGlobe,
  faEarthAmericas,
  faUsers,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className="pt-[var(--header-height)]">
      <div className="wrapper">
        <div className="text-center py-[40px]">
          <div className="font-logo text-sunny text-xl">DAT Travel</div>
          <div className="font-signikaBold text-sky text-4xl">Về chúng tôi</div>
        </div>

        {/* Introduce */}
        <div className="flex gap-[40px] items-center pb-[50px] max-md:flex-col-reverse">
          <div className="w-[45%] max-md:w-full flex flex-col gap-3">
            <div className="text-sky font-robotoBold text-lg">
              Hiểu hơn về chúng tôi
            </div>

            <div className="font-robotoBold text-3xl text-black">
              Công ty du lịch
              <br className="max-lg:block hidden" />
              <span className="font-signikaBold text-sunny"> DAT Travel</span>
            </div>

            <div className="text-grey text-sm">
              DAT Travel được thành lập vào năm 2019 bởi một nhóm đam mê du lịch
              với mục tiêu mang đến những trải nghiệm du lịch độc đáo và phong
              phú. Bắt đầu với các tour trong nước, công ty nhanh chóng mở rộng
              ra quốc tế, đa dạng hóa các tour từ mạo hiểm, nghỉ dưỡng đến gia
              đình và doanh nghiệp. Hiện nay, DAT Travel tự hào là lựa chọn tin
              cậy của hàng ngàn khách hàng, mang đến những hành trình an toàn và
              đáng nhớ với đội ngũ nhân viên chuyên nghiệp và nhiệt huyết.
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div className="font-robotoBold text-3xl text-sky">05</div>
                <div className="h-[35px] w-[4px] bg-sky opacity-40 rounded-full" />
                <div>Năm hình thành và phát triển</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="font-robotoBold text-3xl text-sky">30</div>
                <div className="h-[35px] w-[4px] bg-sky opacity-40 rounded-full" />
                <div>Điểm đến nổi bật</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="font-robotoBold text-3xl text-sky">20</div>
                <div className="h-[35px] w-[4px] bg-sky opacity-40 rounded-full" />
                <div>Đối tác chiến lược</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="font-robotoBold text-3xl text-sky">50</div>
                <div className="h-[35px] w-[4px] bg-sky opacity-40 rounded-full" />
                <div>Hướng dẫn viên giàu kinh nghiệm</div>
              </div>
            </div>
          </div>

          <div className="w-[55%] max-md:w-full ">
            <div className="w-full h-[400px]">
              <img
                src="/img-section-about.webp"
                alt=""
                className="object-fill"
              />
            </div>
          </div>
        </div>
        {/* --------------------------------------- */}

        {/* Choose us */}
        <div className="my-[40px]">
          <div className=" max-w-full text-center flex flex-col items-center gap-2 mb-6">
            <div className="font-robotoBold text-3xl">
              Hãy chọn
              <span className="font-signikaBold text-sunny "> DAT Travel</span>
            </div>

            <div className="max-w-[95%] w-[500px]">
              Cùng đến với 1.001 lý do bạn nên chọn chúng tôi DAT Travel. Có 1
              thế giới tuyệt vời đang chờ bạn khám phá cùng chúng tôi
            </div>

            <div className="max-w-full w-[700px] text-grey text-sm">
              Với hơn 5 năm tổ chức và triển khai các tour du lịch trong và
              ngoài nước, chúng tôi cam kết đem lại cho khách hàng những hành
              trình tuyệt vời, những kỉ niệm đáng nhớ thông qua những dịch vụ
              chuyên nghiệp mà chúng tôi thực hiện.
            </div>
          </div>

          <div className="grid grid-cols-3  max-md:grid-cols-2 gap-3 py-2 border-t-[2px] border-b-[2px] border-grey m-auto w-fit">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPlane} className="w-4 h-4 text-sky" />
              Chuyến bay đẳng cấp
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faSuitcaseRolling}
                className="w-4 h-4 text-sky"
              />
              Hành trình thú vị
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faHourglassHalf}
                className="w-4 h-4 text-sky"
              />
              Thời gian hợp lí
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faHotel} className="w-4 h-4 text-sky" />
              Khách sạn tiện nghi
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-sky" />
              Chất lượng đỉnh cao
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 text-sky" />
              Tour du lịch đa dạng
            </div>
          </div>
        </div>
        {/* --------------------------------------- */}
      </div>
      {/* More Info */}
      <div className="bg-bgSection pb-[40px] pt-[70px] clip-path-around">
        <div className="wrapper flex justify-between gap-[30px] max-md:flex-col max-md:w-[370px] max-md:max-w-full">
          <div className="flex flex-col relative p-5 text-center bg-white border-sky border-[2px] rounded-[10px]">
            <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-center bg-white p-2 w-fit h-fit rounded-full border-sky text-sky border-[2px] ">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                className="w-[20px] h-[20px]"
              />
            </div>

            <div className="text-sky font-robotoBold">
              Các Thông Tin Tour Mới Nhất
            </div>

            <div className="text-grey mt-auto">
              Luôn cập nhật các thông tin mới nhất, đầy đủ nhất về các tour tốt
              nhất hiện nay
            </div>
          </div>

          <div className="flex flex-col relative p-5 text-center bg-white border-sky border-[2px] rounded-[10px]">
            <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-center bg-white p-2 w-fit h-fit rounded-full border-sky text-sky border-[2px] ">
              <FontAwesomeIcon icon={faUsers} className="w-[20px] h-[20px]" />
            </div>

            <div className="text-sky font-robotoBold">
              Chuyên gia tư vấn chi tiết nhất
            </div>

            <div className="text-grey mt-auto">
              Các tư vấn chuyên gia luôn sẵn sàng tư vấn tận tâm, chi tiết và
              tốt nhất
            </div>
          </div>

          <div className="flex flex-col relative p-5 text-center bg-white border-sky border-[2px] rounded-[10px]">
            <div className="absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] flex-center bg-white p-2 w-fit h-fit rounded-full border-sky text-sky border-[2px] ">
              <FontAwesomeIcon icon={faTag} className="w-[20px] h-[20px]" />
            </div>

            <div className="text-sky font-robotoBold">
              Khuyến mãi & Giá cả luôn tốt nhất
            </div>

            <div className="text-grey mt-auto">
              Các ưu đãi luôn được cập nhật mới nhất và giá cả tốt nhất cho bạn
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------- */}
    </div>
  );
};

export default AboutUs;
