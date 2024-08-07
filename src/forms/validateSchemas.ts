import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không đúng cấu trúc" }),
  message: z.string().min(1, { message: "Tin nhắn không được để trống" }),
});

const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không đúng cấu trúc" }),
  password: z.string().min(1, { message: "Mật khẩu không được để trống" }),
});

const signUpSchema = z
  .object({
    name: z.string().min(1, { message: "Tên không được để trống" }),
    email: z
      .string()
      .min(1, { message: "Email không được để trống" })
      .email({ message: "Email không đúng cấu trúc" }),
    password: z.string().min(1, { message: "Mật khẩu không được để trống" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Xác nhận mật khẩu không được để trống" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu nhập lại không trùng khớp",
    path: ["confirmPassword"],
  });

const userCreateAdminSchema = z
  .object({
    name: z.string().min(1, { message: "Tên không được để trống" }),
    email: z
      .string()
      .min(1, { message: "Email không được để trống" })
      .email({ message: "Email không đúng cấu trúc" }),
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

const userUpdateAdminSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không đúng cấu trúc" }),
  phone: z.string(),
  address: z.string(),
});

const profileSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không đúng cấu trúc" }),
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
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Email không đúng cấu trúc" }),
  phone: z.string().min(1, { message: "Số điện thoại không được để trống" }),
  address: z.string().min(1, { message: "Địa chỉ không được để trống" }),
});

const DescSchema = z.object({
  introduce: z.string().min(1, { message: "Giới thiệu không được để trống" }),
  overview: z.string().min(1, { message: "Tổng quan không được để trống" }),
  topic: z.string().min(1, { message: "Chủ đề không được để trống" }),
});

const ScheduleDescSchema = z.object({
  timeOfDate: z.string(),
  detail: z.string(),
});

const ScheduleSchema = z.object({
  title: z.string(),
  desc: z.array(ScheduleDescSchema),
});

const tourAdminSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  price: z
    .number({ message: "Bạn phải nhập số" })
    .refine((value) => value !== 0, {
      message: "Giá phải lớn hơn 0",
    }),
  discount: z.number({ message: "Bạn phải nhập số" }),
  maxSeat: z
    .number({ message: "Bạn phải nhập số" })
    .refine((value) => value !== 0, {
      message: "Số người phải lớn hơn 0",
    }),
  depart: z.string().min(1, { message: "Điểm khởi hành không được để trống" }),
  destination: z.string().min(1, { message: "Điểm đến không được để trống" }),
  dateStart: z
    .array(z.string(), { message: "Ngày khởi hành không được rỗng" })
    .nonempty("Ngày khởi hành không được rỗng"),
  timeTravel: z
    .string()
    .min(1, { message: "Thời gian du lịch không được để trống" }),
  desc: DescSchema,
  schedule: z.array(ScheduleSchema),
});

export {
  contactSchema,
  signInSchema,
  signUpSchema,
  userCreateAdminSchema,
  userUpdateAdminSchema,
  profileSchema,
  updatePasswordSchema,
  bookingSchema,
  tourAdminSchema,
};
