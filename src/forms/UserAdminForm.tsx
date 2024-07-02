import { Button, Form, Input, message, Upload } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import { useState } from "react";
import { userAdminForm } from "@/types/types";
import { userAdminSchema } from "@/forms/validateSchemas";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

interface ChildComponentProps {
  setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserAdminForm: React.FC<ChildComponentProps> = ({ setIsOpenForm }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  };

  const formReactHook = useForm<userAdminForm>({
    defaultValues,
    resolver: zodResolver(userAdminSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = (values: userAdminForm) => {
    console.log("admin form", values);
  };

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <div className="text-2xl text-sky font-signikaBold mb-[20px]">
        Tạo tài khoản
      </div>
      <div className="flex gap-[40px] max-sm:flex-col max-sm:gap-[20px]">
        <div className="flex gap-[20px] sm:flex-col items-center">
          <div className="max-sm:w-[75px] max-sm:h-[75px] w-[125px] h-[125px] rounded-full overflow-hidden">
            <img src="/avatar.jpg" alt="" />
          </div>
          <Upload {...props} maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>

        <Form
          onFinish={handleSubmit(handleSubmitForm)}
          className="w-[350px] flex flex-col max-sm:max-h-[308px] max-w-full"
          form={form}
          size="large"
        >
          <div className="overflow-y-auto pr-[10px] mb-[20px] flex-1">
            <FormItem control={control} name="name">
              <Input placeholder="Tên" />
            </FormItem>
            <FormItem control={control} name="email">
              <Input placeholder="Email" />
            </FormItem>
            <FormItem control={control} name="password">
              <Input.Password placeholder="Mật khẩu" />
            </FormItem>
            <FormItem control={control} name="confirmPassword">
              <Input.Password placeholder="Xác nhân mật khẩu" />
            </FormItem>
            <FormItem control={control} name="phone">
              <Input placeholder="Số điện thoại" />
            </FormItem>
            <FormItem control={control} name="address">
              <Input placeholder="Địa chỉ" />
            </FormItem>
          </div>

          <div className="flex gap-5 w-full justify-center">
            <Button
              onClick={() => setIsOpenForm(false)}
              className="border-sky text-sky"
            >
              Trở lại
            </Button>

            <Button type="primary" htmlType="submit">
              {loading === true ? "Loading..." : "Tạo tài khoản"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserAdminForm;
