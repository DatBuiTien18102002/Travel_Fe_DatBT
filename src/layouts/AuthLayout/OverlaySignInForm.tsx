import { Link } from "react-router-dom";

const OverlaySignInForm = () => {
  return (
    <div className="overlay-panel overlay-right right-0 translate-x-0 transition-form">
      <h2 className="font-robotoBold text-3xl">Rất vui được gặp lại bạn!</h2>
      <p className="mt-[25px] mb-[35px]">
        Để tiếp tục kết nối với chúng tôi, vui lòng đăng nhập bằng thông tin cá
        nhân của bạn.
      </p>
      <p className="mb-2">Hoặc nếu bạn chưa có tài khoản</p>
      <Link
        to="/sign-up"
        className="border-white border-solid border-[3px] px-5 py-1 rounded-full bg-transparent"
      >
        Đăng ký
      </Link>
    </div>
  );
};

export default OverlaySignInForm;
