import {z} from "zod"

export const verifySchema = z.object({
      code: z.string().length(6, "Verfication cose msut be 6 digits")
})