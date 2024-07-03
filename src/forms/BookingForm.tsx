import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import { useState } from "react";
import { bookingForm } from "@/types/types";
import { bookingSchema } from "@/forms/validateSchemas";

const BookingForm = ({
  handleBookingForm,
}: {
  handleBookingForm: (values: bookingForm) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const formReactHook = useForm<bookingForm>({
    defaultValues,
    resolver: zodResolver(bookingSchema),
  });

  const { control, handleSubmit } = formReactHook;

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
        {loading === true ? "Loading..." : "Đặt tour"}
      </Button>
    </Form>
  );
};

export default BookingForm;
