import * as z from "zod";

export const PostValidation = z.object({
  photo: z.string().url().nonempty(),
  description: z
    .string()
    .min(3, { message: "Minimum 3 characters." }),
});

export const Comments = z.object({
    description: z
      .string()
      .min(3, { message: "Minimum 3 characters." }),
  });