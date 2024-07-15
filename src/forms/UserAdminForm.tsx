import { Button, Form, Input, Upload } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import { useState } from "react";
import {
  responseType,
  signInResData,
  signUpResData,
  userAdminFormProps,
  userCreateAdminForm,
  userResData,
  userUpdateAdminForm,
} from "@/types/types";
import {
  userCreateAdminSchema,
  userUpdateAdminSchema,
} from "@/forms/validateSchemas";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import getBase64 from "@/utils/getBase64";
import { useCreateUser, useUpdateUser } from "@/react-query/userQuery";
import message from "@/utils/message";
import handleDecoded from "@/utils/jwtDecode";

const UserAdminForm: React.FC<userAdminFormProps> = ({
  setIsOpenForm,
  type,
  defaultValue,
  setIsActionAllowed,
}) => {
  const [avatar, setAvatar] = useState(defaultValue.avatar);
  const [form] = Form.useForm();
  const { mutateAsync: createUser, isPending: loadingCreate } = useCreateUser();
  const { mutateAsync: updateUser, isPending: loadingUpdate } = useUpdateUser();
  const defaultValuesCreateForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  };
  const defaultValuesUpdateForm = {
    name: defaultValue?.name ? defaultValue?.name : "",
    email: defaultValue?.email ? defaultValue?.email : "",
    phone: defaultValue?.phone ? defaultValue?.phone : "",
    address: defaultValue?.address ? defaultValue?.address : "",
  };

  const handleUpdate = async (values: userUpdateAdminForm) => {
    console.log("update admin", defaultValue);

    const { storageData } = handleDecoded();

    const res: responseType<userResData> = await updateUser({
      ...values,
      avatar: avatar,
      _id: defaultValue?._id,
      access_token: storageData || "",
    });

    if (res.message) {
      const status = res.status.toString();
      if (status === "200") {
        message("success", res.message);
        setIsOpenForm(false);
        setIsActionAllowed(false);
      } else {
        message("error", res.message);
      }
    }
  };

  const handleCreate = async (values: userCreateAdminForm) => {
    console.log("create admin", values);

    try {
      const res: responseType<signUpResData> = await createUser({
        ...values,
        avatar,
      });

      console.log("Update user", res);
      if (res.message) {
        const status = res.status.toString();
        if (status === "200") {
          message("success", res.message);
          setIsOpenForm(false);
        } else {
          message("error", res.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  let defaultValuesForm: Partial<userCreateAdminForm & userUpdateAdminForm> =
    defaultValuesCreateForm;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let userAdminSchema: any = userCreateAdminSchema;

  if (type === "update") {
    defaultValuesForm = defaultValuesUpdateForm;
    userAdminSchema = userUpdateAdminSchema;
  }

  const formReactHook = useForm<userCreateAdminForm | userUpdateAdminForm>({
    defaultValues: defaultValuesForm,
    resolver: zodResolver(userAdminSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = (
    values: userCreateAdminForm | userUpdateAdminForm
  ) => {
    if (type === "create") {
      return handleCreate(values as userCreateAdminForm);
    } else {
      return handleUpdate(values as userUpdateAdminForm);
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
    <div>
      <div className="text-2xl text-sky font-signikaBold mb-[20px]">
        Tạo tài khoản
      </div>
      <div className="flex gap-[40px] max-sm:flex-col max-sm:gap-[20px]">
        <div className="custom-avatar-antd flex gap-[20px] sm:flex-col items-center">
          <div className="max-sm:w-[75px] max-sm:h-[75px] w-[125px] h-[125px] rounded-full overflow-hidden">
            <img src={avatar ? avatar : "/avatar.jpg"} alt="" />
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
            {type === "create" && (
              <>
                <FormItem control={control} name="password">
                  <Input.Password placeholder="Mật khẩu" />
                </FormItem>
                <FormItem control={control} name="confirmPassword">
                  <Input.Password placeholder="Xác nhân mật khẩu" />
                </FormItem>
              </>
            )}
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

            <Button
              type="primary"
              htmlType="submit"
              className={
                type === "create"
                  ? "w-[117.41px] flex-center"
                  : "w-[150.55px] flex-center"
              }
            >
              {loadingCreate === true || loadingUpdate === true
                ? "Loading..."
                : type === "create"
                ? "Tạo tài khoản"
                : "Cập nhật tài khoản"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserAdminForm;
