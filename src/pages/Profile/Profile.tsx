import { Button, Form, Input, Upload } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import { useEffect, useState } from "react";
import {
  profileForm,
  responseType,
  userResData,
  userType,
} from "@/types/types";
import { profileSchema } from "@/forms/validateSchemas";
import { UploadOutlined } from "@ant-design/icons";
import ModalFormLayout from "@/layouts/ModalFormLayout/ModalFormLayout";
import { UpdatePassWordForm } from "@/forms";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUser } from "@/react-query/userQuery";
import handleDecoded from "@/utils/jwtDecode";
import message from "@/utils/message";
import { updateUser } from "@/redux/slice/userSlice";
import getBase64 from "@/utils/getBase64";
import { RcFile } from "antd/es/upload";
import { UploadFile } from "antd/es/upload/interface";

const Profile = () => {
  const dispatch = useDispatch();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [form] = Form.useForm();
  const loginUser = useSelector((state: { user: userType }) => state.user);
  const [avatar, setAvatar] = useState(loginUser.avatar);

  const { mutateAsync: updateProfile, isPending: loadingUpdate } =
    useUpdateUser();

  const defaultValues = {
    name: loginUser?.name ? loginUser?.name : "",
    email: loginUser?.email ? loginUser?.email : "",
    phone: loginUser?.phone ? loginUser?.phone : "",
    address: loginUser?.address ? loginUser?.address : "",
  };

  const formReactHook = useForm<profileForm>({
    defaultValues,
    resolver: zodResolver(profileSchema),
  });

  const { control, handleSubmit, reset } = formReactHook;

  useEffect(() => {
    setAvatar(loginUser?.avatar);
    reset({
      name: loginUser?.name ? loginUser?.name : "",
      email: loginUser?.email ? loginUser?.email : "",
      phone: loginUser?.phone ? loginUser?.phone : "",
      address: loginUser?.address ? loginUser?.address : "",
    });
  }, [loginUser, reset]);

  const handleSubmitForm = async (values: profileForm) => {
    const { storageData } = handleDecoded();

    const res: responseType<userResData> = await updateProfile({
      ...values,
      avatar: avatar,
      _id: loginUser?._id,
      access_token: storageData || "",
    });

    if (res.message && res.data) {
      const status = res.status.toString();
      if (status !== "200") {
        message("error", res?.message);
      } else {
        message("success", res?.message);
        dispatch(updateUser(res.data));
      }
    }
  };

  const handleChangeAvatar = async ({
    fileList,
  }: {
    fileList: UploadFile<RcFile>[];
  }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setAvatar(file.preview || "");
  };

  const beforeUpload = () => {
    return false;
  };

  return (
    <>
      <div className="pt-[var(--header-height)] flex-center">
        <div className="my-[40px] bg-white border-[2px] border-sky shadow-card p-[20px] rounded-[10px] max-w-[90%]">
          <div className="text-2xl text-sky font-signikaBold mb-[20px]">
            Thông tin người dùng
          </div>

          <div className="flex gap-[20px] max-sm:flex-col">
            <div className="custom-avatar-antd flex gap-[20px]  items-center flex-col">
              <div className="max-sm:w-[75px] max-sm:h-[75px] w-[125px] h-[125px] rounded-full overflow-hidden border-[3px] border-sky">
                <img src={avatar ? avatar : "/avatar.jpg"} alt="avatar" />
              </div>

              <Upload
                onChange={handleChangeAvatar}
                maxCount={1}
                beforeUpload={beforeUpload}
              >
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

              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                disabled={loadingUpdate}
              >
                {loadingUpdate === true ? "Loading..." : "Cập nhật thông tin"}
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
