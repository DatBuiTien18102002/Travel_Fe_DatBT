import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Tên không được để trống" }),
  email: z.string().min(1, { message: "Email không được để trống" }),
  message: z.string().min(1, { message: "Tin nhắn không được để trống" }),
});

export { contactSchema };
