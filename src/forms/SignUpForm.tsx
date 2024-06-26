import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { signUpValueForm } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/forms/validateSchemas";
import { useState } from "react";
import { Button, Form, Input } from "antd";
import { FormItem } from "react-hook-form-antd";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const defaultValues = {
    email: "",
    password: "",
  };

  const formReactHook = useForm<signUpValueForm>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = (values: signUpValueForm) => {
    // setLoading(true);
    console.log(values);
  };

  return (
    <div className="sign-up-container md:sign-up-transform  absolute w-full md:w-[60%] h-full px-[40px] opacity-0 z-100 md:transition-form">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full px-[40px]">
        <h2 className="text-3xl text-sky font-signikaBold">
          Đăng ký tài khoản
        </h2>
        <p className="text-sm text-grey">Chọn phương thức đăng ký</p>

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
              {loading === true ? "Loading..." : "Đăng ký"}
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
