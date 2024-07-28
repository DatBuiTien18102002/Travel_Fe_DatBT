import { contactValueForm } from "@/types/types";
import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem } from "react-hook-form-antd";
import TextArea from "antd/es/input/TextArea";
import { contactSchema } from "./validateSchemas";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import message from "@/utils/message";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const formReactHook = useForm<contactValueForm>({
    defaultValues,
    resolver: zodResolver(contactSchema),
  });

  const { control, handleSubmit } = formReactHook;

  const handleSubmitForm = (values: contactValueForm) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_REACT_EMAIL_SERVICE_ID,
        import.meta.env.VITE_REACT_EMAIL_TEMPLATE_ID,
        values as unknown as Record<string, unknown>,
        {
          publicKey: import.meta.env.VITE_REACT_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          message("success", "Gửi thành công");
          form.resetFields();
        },
        (error) => {
          setLoading(false);
          message("error", error.text);
        }
      );
  };

  return (
    <Form
      onFinish={handleSubmit(handleSubmitForm)}
      className="md:w-[300px] lg:w-[400px] flex flex-col gap-1 w-full "
      form={form}
    >
      <FormItem control={control} name="name">
        <Input placeholder="Name" />
      </FormItem>
      <FormItem control={control} name="email">
        <Input placeholder="Email" />
      </FormItem>
      <FormItem control={control} name="message">
        <TextArea rows={4} placeholder="Message" />
      </FormItem>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {loading === true ? "Loading..." : "Gửi"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
