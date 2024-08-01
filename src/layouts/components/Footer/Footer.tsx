import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { addressFooter, customerCareFooter, socialFooter } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative bg-footer bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 bg-black opacity-90 " />
      <div className="relative z-2 py-[40px] text-white border-t-[4px] border-sky border-b-[2px]">
        <div className="wrapper">
          <Row gutter={[16, 16]}>
            <Col lg={8} xs={24}>
              <div className="font-logo text-sunny text-4xl">DAT Travel</div>

              <p className="pt-4 text-lg">
                Chúng tôi luôn mong muốn mang đến cho khách hàng những trải
                nghiệm tốt nhất, tạo ra những khoảng khắc khó quên khi đồng hành
                cùng chúng tôi.
              </p>
            </Col>
            <Col lg={6} sm={10} xs={24}>
              <div className="font-signikaBold text-xl text-sky">Địa chỉ</div>

              <div className="pt-4 flex flex-col gap-3">
                {addressFooter.map((item) => (
                  <div key={item.title}>
                    <div className="font-robotoBold ">{item.title}</div>

                    <div>{item.desc}</div>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={6} sm={10} xs={24}>
              <div className="font-signikaBold text-xl text-sky">
                Chăm sóc khách hàng
              </div>

              <div className="pt-4 flex flex-col gap-3">
                {customerCareFooter.map((item) => (
                  <div key={item.title}>
                    <div className="font-robotoBold ">{item.title}</div>

                    <div>{item.desc}</div>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={4} sm={4} xs={24}>
              <div className="font-signikaBold text-xl text-sky">Kết nối</div>

              <div className="pt-4 flex flex-col gap-1">
                {socialFooter.map((item) => (
                  <Link
                    key={item.name}
                    to="https://www.facebook.com/profile.php?id=100011202750667"
                    className="flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="relative z-2 w-full text-center text-white py-4 font-robotoBold">
        © Bản quyền thuộc về
        <span className="font-logo text-sky"> BUITIENDAT</span>
      </div>
    </footer>
  );
};

export default Footer;
