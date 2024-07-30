import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { responseType, signUpResData, signUpValueForm } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/forms/validateSchemas";
import { Button, Form, Input } from "antd";
import { FormItem } from "react-hook-form-antd";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUser } from "@/react-query/userQuery";
import message from "@/utils/message";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { mutateAsync: createUser, isPending: loadingSignUp } = useCreateUser();

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formReactHook = useForm<signUpValueForm>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = async (values: signUpValueForm) => {
    try {
      const res: responseType<signUpResData> = await createUser({
        ...values,
      });

      if (res.message) {
        const status = res.status.toString();
        if (status === "200") {
          message("success", res.message);
          navigate("/sign-in");
        } else {
          message("error", res.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container md:sign-up-transform  absolute w-full md:w-[60%] h-full  md:px-[40px] max-md:px-[15px] opacity-0 z-100 md:transition-form">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full md:px-[40px] max-md:px-[15px]">
        <h2 className="text-3xl text-sky text-center font-signikaBold">
          Đăng ký tài khoản
        </h2>
        <p className="text-sm text-grey text-center">
          Chọn phương thức đăng ký
        </p>

        <div className="flex gap-2 w-full">
          <div className="flex w-[50%] h-[40px] items-center justify-center gap-[3px] rounded-[10px] border-[3px] border-greyLight border-solid hover:bg-greyHover cursor-pointer">
            <img src="/logoGG.webp" className="w-[31px] h-[31px]" alt="" />

            <p className="font-robotoBold">Google</p>
          </div>

          <div className="flex w-[50%] h-[40px] items-center justify-center  gap-2 rounded-[10px] border-[3px] border-greyLight border-solid hover:bg-greyHover cursor-pointer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-sky w-[20px] h-[20px]"
            />
            <p className="font-robotoBold">Facebook</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mx-auto w-full">
          <div className="flex-1 h-[1px] bg-grey" />
          <div className="text-sm text-grey">
            Hoặc đăng ký bằng form dưới đây
          </div>
          <div className="flex-1  h-[1px] bg-grey" />
        </div>

        <Form
          onFinish={handleSubmit(handleSubmitForm)}
          className="flex flex-col w-full "
          form={form}
        >
          <FormItem control={control} name="name">
            <Input
              placeholder="Tên của bạn"
              prefix={<FontAwesomeIcon icon={faUser} className="text-sky" />}
            />
          </FormItem>
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
          <FormItem control={control} name="confirmPassword">
            <Input.Password
              placeholder="Nhập lại mật khẩu"
              prefix={<FontAwesomeIcon icon={faLock} className="text-sky" />}
            />
          </FormItem>

          <div className="w-full">
            <Button
              type="primary"
              htmlType="submit"
              className="!bg-sky w-full h-[46px]"
            >
              {loadingSignUp === true ? "Loading..." : "Đăng ký"}
            </Button>
          </div>
        </Form>

        <Link to="/sign-in" className="md:hidden w-full text-center">
          Chưa có tài khoản?{" "}
          <span className="text-sky underline">Đăng nhập ngay!</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
