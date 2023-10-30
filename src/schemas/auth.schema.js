import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a String",
      })
      .min(5, { message: "Username must have at least 5 characters" }),

    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a String",
      })
      .email({ message: "Invalid Email" }),

    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a String",
      })
      .min(6, { message: "Password must be 6 characters long" })
      .max(16, { message: "Password must be 16 or fewer characters long" }),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a String",
      })
      .email({ message: "Invalid email" }),

    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a String",
      })
      .min(6, { message: "Password must be 6 or more characters long" })
      .max(16, { message: "Password must be 16 or fewer characters long" }),
  }),
});
