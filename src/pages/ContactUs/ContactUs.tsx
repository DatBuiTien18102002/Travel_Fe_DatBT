import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "@/forms";

const ContactUs = () => {
  return (
    <div className="pt-[var(--header-height)]">
      <div className="wrapper">
        <div className="text-center py-[40px]">
          <div className="font-logo text-sunny text-xl">DAT Travel</div>
          <div className="font-signikaBold text-sky text-4xl">
            Liên hệ với chúng tôi
          </div>
        </div>

        <div className="flex-center mb-[40px] gap-[40px] max-md:flex-col-reverse">
          <div className="relative z-30 p-5 bg-white border-[4px] rounded-[10px] border-sky ">
            <div className="text-sky text-lg font-robotoBold mb-3">
              Thông tin liên lạc
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-[20px] h-[20px] text-sky "
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sky font-robotoBold ">Địa chỉ</p>
                  <p className="text-sm">
                    128/5 Bùi Quang Là, P.12, Q.Gò Vấp, TP.HCM
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-[20px] h-[20px] text-sky"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sky font-robotoBold">Thời Gian</p>
                  <p className="text-sm">8H - 23H Hằng ngày</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-[20px] h-[20px] text-sky"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sky font-robotoBold ">Email</p>
                  <p className="text-sm">datbui18102002@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-[20px] h-[20px] text-sky"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-sky font-robotoBold ">Số điện thoại</p>
                  <p className="text-sm">0766980574</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 rounded-[10px] w-[500px] max-w-full overflow-hidden">
            <img src="/Contact.png" alt="" />
          </div>
        </div>

        <div className="flex md:items-center gap-[50px] mb-[40px] max-md:flex-col">
          <div className="flex-1 h-[370px] max-md:flex-none max-md:h-[400px] max-md:w-full">
            <iframe
              title="Vị trí Tiệm"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d346.36776778689375!2d106.64147985768307!3d10.833952288055958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752977855a5983%3A0x62c66050266b4549!2zNTcvMzAgxJDGsOG7nW5nIFBoYW4gSHV5IMONY2gsIFBoxrDhu51uZyAxMiwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1718941814017!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "15px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full md:w-fit">
            <div className="text-sky font-robotoBold text-2xl mb-5">
              Liên hệ
            </div>

            <ContactForm />
          </div>
        </div>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d346.36776778689375!2d106.64147985768307!3d10.833952288055958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752977855a5983%3A0x62c66050266b4549!2zNTcvMzAgxJDGsOG7nW5nIFBoYW4gSHV5IMONY2gsIFBoxrDhu51uZyAxMiwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1718941814017!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  );
};

export default ContactUs;
