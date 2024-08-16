import {z} from "zod"

export const messageSchema = z.object({
      content: z.string().min(10, {
            message: "Content must be at least 10 characters long"
      })
      .max(300, "Content must be longer than 300 characters.")
})