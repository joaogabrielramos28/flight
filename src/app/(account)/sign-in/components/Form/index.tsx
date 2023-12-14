'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchemaValidation, SignInSchema } from "./schema"
import { ControlledInput } from "@components/index"


export const Form = () => {
    const { control, handleSubmit } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchemaValidation)
    })

    const onSubmit = (data: SignInSchema) => {
        console.log(data)
    }
    return (
        <form className="mt-6 space-y-8 w-96" onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput name="email" control={control} placeholder="type your e-mail" label="E-mail" />
            <ControlledInput name="password" type="password" control={control} placeholder="type your password" label="Password" />

            <button className=" w-full bg-secondary text-white rounded-3xl px-6 py-2 cursor-pointer outline-none focus:border-primary hover:opacity-75 transition-opacity">Sign In</button>
        </form>
    )
}