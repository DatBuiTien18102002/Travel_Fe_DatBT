import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import {
  decodedType,
  responseType,
  signInResData,
  signInValueForm,
} from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/forms/validateSchemas";
import { Button, Form, Input } from "antd";
import { FormItem } from "react-hook-form-antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUser } from "@/react-query/userQuery";
import message from "@/utils/message";
import { jwtDecode } from "jwt-decode";
import { userApi } from "@/services";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/slice/userSlice";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { mutateAsync: loginUser, isPending: loadingSignIn } = useLoginUser();

  const defaultValues = {
    email: "",
    password: "",
  };

  const formReactHook = useForm<signInValueForm>({
    defaultValues,
    resolver: zodResolver(signInSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = async (values: signInValueForm) => {
    try {
      const res: responseType<signInResData> = await loginUser({
        ...values,
      });
      console.log("login", res);

      if (res.message) {
        const status = res.status.toString();
        if (status === "200" && res.data) {
          message("success", res.message);
          const decoded: decodedType = jwtDecode(res.data.access_token);

          if (decoded.payload?.id) {
            console.log("id", decoded.payload.id);
            console.log("token", res.data?.access_token);

            const userDetail = await userApi.getDetailUser(
              decoded.payload.id,
              res.data?.access_token
            );
            console.log("user detail", userDetail);
            if (userDetail.data) {
              dispatch(
                updateUser({
                  refresh_token: res.data?.refresh_token,
                  access_token: res.data?.access_token,
                  ...userDetail.data,
                })
              );
              localStorage.setItem(
                "refresh_token",
                JSON.stringify(res.data?.refresh_token)
              );
              localStorage.setItem(
                "access_token",
                JSON.stringify(res.data?.access_token)
              );
              navigate("/");
            }
          }
        } else {
          message("error", res.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in-container md:sign-in-transform absolute w-full md:w-[60%] h-full px-[40px] z-[2] md:transition-form">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full px-[40px]">
        <h2 className="text-3xl text-sky font-signikaBold">
          Đăng nhập tài khoản
        </h2>
        <p className="text-sm text-grey">Chọn phương thức đăng nhập</p>

        <div className="flex gap-2 w-full">
          <div className="flex w-[50%] h-[40px] items-center justify-center gap-[3px] rounded-[10px] border-[2px] border-greyLight border-solid hover:bg-greyHover cursor-pointer">
            <img src="/logoGG.webp" className="w-[31px] h-[31px]" alt="" />

            <p className="font-robotoBold mt-[2px] leading-[0]">Google</p>
          </div>

          <div className="flex w-[50%] h-[40px] items-center justify-center  gap-2 rounded-[10px] border-[2px] border-greyLight border-solid hover:bg-greyHover cursor-pointer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-sky w-[20px] h-[20px]"
            />
            <p className="font-robotoBold  mt-[2px] leading-[0]">Facebook</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mx-auto w-full">
          <div className="flex-1 h-[1px] bg-grey" />
          <div className="text-sm text-grey">
            Hoặc đăng nhập bằng email đã tạo
          </div>
          <div className="flex-1  h-[1px] bg-grey" />
        </div>

        <Form
          onFinish={handleSubmit(handleSubmitForm)}
          className="flex flex-col w-full "
          form={form}
        >
          <FormItem control={control} name="email">
            <Input
              placeholder="Email"
              prefix={
                <FontAwesomeIcon icon={faEnvelope} className="text-sky" />
              }
            />
          </FormItem>
          <FormItem control={control} name="password">
            <Input.Password
              placeholder="Mật khẩu"
              prefix={<FontAwesomeIcon icon={faLock} className="text-sky" />}
            />
          </FormItem>

          <div className="w-full">
            <Button
              type="primary"
              htmlType="submit"
              className="!bg-sky w-full h-[46px]"
            >
              {loadingSignIn === true ? "Loading..." : "Đăng nhập"}
            </Button>
          </div>
        </Form>

        <Link to="/sign-up" className="md:hidden w-full text-center">
          Chưa có tài khoản?{" "}
          <span className="text-sky underline">Đăng ký ngay!</span>
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
