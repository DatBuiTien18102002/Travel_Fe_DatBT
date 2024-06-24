import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
                <div>
                  <div className="font-robotoBold ">Cơ sở 1</div>

                  <div>
                    128/5 Bùi Quang Là, Phường 12, Q.Gò Vấp, Tp.Hồ Chí Minh,
                    Việt Nam
                  </div>
                </div>

                <div>
                  <div className="font-robotoBold ">Cơ sở 2</div>

                  <div>
                    57/41 Phan Huy Ích, Phường 12, Q.Gò Vấp, Tp.Hồ Chí Minh,
                    Việt Nam
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={10} xs={24}>
              <div className="font-signikaBold text-xl text-sky">
                Chăm sóc khách hàng
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <div>
                  <div className="font-robotoBold ">Thời gian hỗ trợ</div>

                  <div>8H - 23H Hằng ngày</div>
                </div>

                <div>
                  <div className="font-robotoBold ">Hotline</div>

                  <div>0766980574</div>
                </div>

                <div>
                  <div className="font-robotoBold ">Email</div>

                  <div>datbui18102002@gmail.com</div>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={4} xs={24}>
              <div className="font-signikaBold text-xl text-sky">Kết nối</div>

              <div className="pt-4 flex flex-col gap-1">
                <Link
                  to="https://www.facebook.com/profile.php?id=100011202750667"
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  <p>Facebook</p>
                </Link>
                <Link
                  to="https://x.com/home?lang=en"
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                  <p>Twitter</p>
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  <p>Instagram</p>
                </Link>
                <Link
                  to="https://www.youtube.com/"
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                  <p>Youtube</p>
                </Link>
                <Link
                  to="https://www.tiktok.com/"
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                  <p>TikTok</p>
                </Link>
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
