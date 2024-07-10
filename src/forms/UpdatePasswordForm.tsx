import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import {
  booleanSetStateProps,
  responseType,
  updatePasswordForm,
  updateResData,
  userType,
} from "@/types/types";
import { updatePasswordSchema } from "@/forms/validateSchemas";
import { useUpdateUser } from "@/react-query/userQuery";
import { useSelector } from "react-redux";
import handleDecoded from "@/utils/jwtDecode";
import message from "@/utils/message";

const UpdatePasswordForm: React.FC<booleanSetStateProps> = ({
  setIsOpenForm,
}) => {
  const loginUser = useSelector((state: { user: userType }) => state.user);
  const { mutateAsync: updateProfile, isPending: loadingUpdate } =
    useUpdateUser();

  const [form] = Form.useForm();
  const defaultValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const formReactHook = useForm<updatePasswordForm>({
    defaultValues,
    resolver: zodResolver(updatePasswordSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = async (values: updatePasswordForm) => {
    console.log("Cập nhật mật khẩu", values);
    const { storageData } = handleDecoded();

    const res: responseType<updateResData> = await updateProfile({
      ...values,
      _id: loginUser?._id,
      access_token: storageData || "",
    });

    console.log(res);

    if (res.message) {
      const status = res.status.toString();
      if (status !== "200") {
        message("error", res?.message);
      } else {
        message("success", res?.message);
        setIsOpenForm(false);
      }
    }
  };

  return (
    <div>
      <div className="text-2xl text-sky font-signikaBold mb-[20px]">
        Cập nhật mật khẩu
      </div>

      <Form
        onFinish={handleSubmit(handleSubmitForm)}
        className="w-[350px] flex flex-col max-sm:max-h-[308px] max-w-full"
        form={form}
        size="large"
      >
        <div className="overflow-y-auto pr-[10px] mb-[20px] flex-1">
          <FormItem control={control} name="oldPassword">
            <Input.Password placeholder="Mật khẩu hiện tại" />
          </FormItem>
          <FormItem control={control} name="newPassword">
            <Input.Password placeholder="Mật khẩu mới" />
          </FormItem>
          <FormItem control={control} name="confirmNewPassword">
            <Input.Password placeholder="Xác nhân mật khẩu mới" />
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
            {loadingUpdate === true ? "Loading..." : "Cập nhật"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdatePasswordForm;
