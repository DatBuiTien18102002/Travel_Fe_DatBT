import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import { useState } from "react";
import { booleanSetStateProps, updatePasswordForm } from "@/types/types";
import { updatePasswordSchema } from "@/forms/validateSchemas";

const UpdatePasswordForm: React.FC<booleanSetStateProps> = ({
  setIsOpenForm,
}) => {
  const [loading, setLoading] = useState(false);
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

  const handleSubmitForm = (values: updatePasswordForm) => {
    console.log("Cập nhật mật khẩu", values);
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
            {loading === true ? "Loading..." : "Cập nhật"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdatePasswordForm;
