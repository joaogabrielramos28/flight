import * as z from 'zod'


export const signInSchemaValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})


export type SignInSchema = z.infer<typeof signInSchemaValidation>