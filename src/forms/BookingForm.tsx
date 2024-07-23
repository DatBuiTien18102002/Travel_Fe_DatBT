import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import { useEffect } from "react";
import { bookingForm, userType } from "@/types/types";
import { bookingSchema } from "@/forms/validateSchemas";
import { useSelector } from "react-redux";

const BookingForm = ({
  handleBookingForm,
}: {
  handleBookingForm: (values: bookingForm) => void;
}) => {
  const currentUser = useSelector((state: { user: userType }) => state.user);
  const [form] = Form.useForm();
  const defaultValues = {
    name: currentUser?.name,
    email: currentUser.email,
    phone: currentUser.phone,
    address: currentUser.address,
  };

  const formReactHook = useForm<bookingForm>({
    defaultValues,
    resolver: zodResolver(bookingSchema),
  });

  const { control, handleSubmit, reset } = formReactHook;

  useEffect(() => {
    reset(defaultValues);
  }, [currentUser, reset]);

  return (
    <Form
      onFinish={handleSubmit(handleBookingForm)}
      className="w-full flex flex-col max-sm:max-h-[308px]"
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

      <Button type="primary" htmlType="submit" className="w-full">
        Đặt tour
      </Button>
    </Form>
  );
};

export default BookingForm;
