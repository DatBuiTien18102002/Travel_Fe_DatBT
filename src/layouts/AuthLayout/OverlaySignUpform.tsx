import { Link } from "react-router-dom";

const OverlaySignUpForm = () => {
  return (
    <div className="overlay-panel overlay-left right-[60%] translate-x-[-12%] transition-form">
      <h2 className="font-robotoBold text-3xl">Bắt đầu hành trình khám phá!</h2>
      <p className="mt-[25px] mb-[35px]">
        Tạo tài khoản để bắt đầu hành trình khám phá những điểm đến tuyệt vời
        trên khắp thế giới.
      </p>

      <p className="mb-2">Hoặc nếu bạn đã có tài khoản</p>
      <Link
        to="/sign-in"
        className="border-white border-solid border-[3px] px-5 py-1 rounded-full bg-transparent"
      >
        Đăng nhập
      </Link>
    </div>
  );
};

export default OverlaySignUpForm;
