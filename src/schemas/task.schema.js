import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a String",
      })
      .min(1, { message: "Title must have at least 1 characters" }),

    description: z
      .string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a String",
      })
      .min(1, { message: "Description must have at least 1 characters" }),

    category: z
      .string({
        required_error: "Category is required",
        invalid_type_error: "Category must be a String",
      })
      .min(2, { message: "Category must have at least 2 characters" }),
  }),
});

export const getTaskSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "Id is required",
        invalid_type_error: "Id must be a string",
      })
      .min(24, { message: "Id must only contain 24 characters" })
      .max(24, { message: "Id must only contain 24 characters" }),
  }),
});

export const updateTaskSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: "Title must be a String",
      })
      .min(1, { message: "Title must have at least 1 characters" })
      .optional(),
    description: z
      .string({
        invalid_type_error: "Description must be a String",
      })
      .min(1, { message: "Description must have at least 1 characters" })
      .optional(),
    category: z
      .string({
        invalid_type_error: "Category must be a String",
      })
      .min(2, { message: "Category must have at least 2 characters" })
      .optional(),
  }),
  params: z.object({
    id: z
      .string({
        required_error: "Id is required",
        invalid_type_error: "Id must be a String",
      })
      .min(24, { message: "Id must only contain 24 characters" })
      .max(24, { message: "Id must only contain 24 characters" }),
  }),
});

export const deleteTaskSchema = z.object({
  params: z.object({
    id: z
      .string({
        required_error: "Id is required",
        invalid_type_error: "Id must be a String",
      })
      .min(24, { message: "Id must only contain 24 characters" })
      .max(24, { message: "Id must only contain 24 characters" }),
  }),
});
