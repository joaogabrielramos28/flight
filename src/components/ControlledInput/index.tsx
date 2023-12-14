"use client"
import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type ControlledInputProps<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
    name: Path<T>
    control: Control<T>
    label: string
}

export const ControlledInput = <T extends FieldValues>({ name, control, label, ...rest }: ControlledInputProps<T>) => {
    return (
        <div>
            <h3 className="text-black text-lg">{label}</h3>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        {...rest}
                        className="w-full mt-2 border border-black rounded-3xl px-6 py-2 cursor-pointer outline-none focus:border-primary hover:opacity-75 transition-opacity"
                    />
                )}
            />
        </div>
    );
}