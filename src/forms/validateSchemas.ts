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

const profileSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  email: z.string().email({ message: "Email không được để trống" }),
  phone: z.string(),
  address: z.string(),
});

const updatePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, { message: "Mật khẩu cũ không được để trống" }),
    newPassword: z
      .string()
      .min(1, { message: "Mật khẩu mới không được để trống" }),
    confirmNewPassword: z
      .string()
      .min(1, { message: "Xác nhận mật khẩu mới không được để trống" }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Mật khẩu mới nhập lại không trùng khớp",
    path: ["confirmPassword"],
  });

const bookingSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  email: z.string().email({ message: "Email không được để trống" }),
  phone: z.string().min(1, { message: "Số điện thoại không được để trống" }),
  address: z.string().min(1, { message: "Địa chỉ không được để trống" }),
});

export {
  contactSchema,
  signInSchema,
  signUpSchema,
  userAdminSchema,
  profileSchema,
  updatePasswordSchema,
  bookingSchema,
};
