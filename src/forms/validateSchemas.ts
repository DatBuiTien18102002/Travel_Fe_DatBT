import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  email: z.string().email({ message: "Email không được để trống" }),
  message: z.string().min(1, { message: "Tin nhắn không được để trống" }),
});

const signInSchema = z.object({
  email: z.string().email({ message: "Email không được để trống" }),
  password: z.string().min(1, { message: "Mật khẩu không được để trống" }),
});

const signUpSchema = z
  .object({
    email: z.string().email({ message: "Email không được để trống" }),
    password: z.string().min(1, { message: "Mật khẩu không được để trống" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Xác nhận mật khẩu không được để trống" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu nhập lại không trùng khớp",
    path: ["confirmPassword"],
  });

const userAdminSchema = z
  .object({
    name: z.string().min(1, { message: "Tên không được để trống" }),
    email: z.string().email({ message: "Email không được để trống" }),
    password: z.string().min(1, { message: "Mật khẩu không được để trống" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Xác nhận mật khẩu không được để trống" }),
    phone: z.string(),
    address: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu nhập lại không trùng khớp",
    path: ["confirmPassword"],
  });

export { contactSchema, signInSchema, signUpSchema, userAdminSchema };
