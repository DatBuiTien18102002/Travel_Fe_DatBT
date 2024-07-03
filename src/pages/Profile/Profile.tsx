import { Button, Form, Input, message, Upload } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import { useState } from "react";
import { profileForm } from "@/types/types";
import { profileSchema } from "@/forms/validateSchemas";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import { UpdatePassWordForm } from "@/forms";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [form] = Form.useForm();
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const formReactHook = useForm<profileForm>({
    defaultValues,
    resolver: zodResolver(profileSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = (values: profileForm) => {
    console.log("profile form", values);
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
    <>
      <div className="pt-[var(--header-height)] flex-center">
        <div className="my-[40px] bg-white border-[2px] border-sky shadow-card p-[20px] rounded-[10px] max-w-[90%]">
          <div className="text-2xl text-sky font-signikaBold mb-[20px]">
            Thông tin người dùng
          </div>

          <div className="flex gap-[20px] max-sm:flex-col">
            <div className="flex gap-[20px]  items-center sm:flex-col">
              <div className="max-sm:w-[75px] max-sm:h-[75px] w-[125px] h-[125px] rounded-full overflow-hidden border-[3px] border-sky">
                <img src="/avatar.jpg" alt="" />
              </div>

              <Upload {...props} maxCount={1}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>

            <Form
              onFinish={handleSubmit(handleSubmitForm)}
              className="w-[350px] flex flex-col max-sm:max-h-[350px] max-w-full"
              form={form}
              size="large"
            >
              <div className="overflow-y-auto pr-[10px] flex-1">
                <FormItem control={control} name="name">
                  <Input placeholder="Tên" />
                </FormItem>
                <FormItem control={control} name="email">
                  <Input placeholder="Email" />
                </FormItem>
                <FormItem control={control} name="phone">
                  <Input placeholder="Số điện thoại" />
                </FormItem>
                <FormItem control={control} name="address">
                  <Input placeholder="Địa chỉ" />
                </FormItem>
              </div>

              <div
                className="w-full text-center mb-[20px]"
                onClick={() => setIsOpenForm(true)}
              >
                Thay đổi mật khẩu ?{" "}
                <span className="text-sky cursor-pointer">Nhấn vào đây !</span>
              </div>

              <Button type="primary" htmlType="submit" className="w-full">
                {loading === true ? "Loading..." : "Cập nhật thông tin"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
      {isOpenForm && (
        <ModalFormLayout>
          <UpdatePassWordForm setIsOpenForm={setIsOpenForm} />
        </ModalFormLayout>
      )}
    </>
  );
};

export default Profile;
