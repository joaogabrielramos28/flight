'use client'
import { useRef, InputHTMLAttributes } from "react";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    children?: React.ReactNode
}

export const Input = ({ children, id, ...props }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const handleFocus = () => {
        inputRef.current?.focus()
        containerRef?.current?.classList.add('border-2')
        containerRef?.current?.classList.add('border-secondary')
    }
    const handleBlur = () => {
        inputRef.current?.blur()
        containerRef?.current?.classList.remove('border-2')
        containerRef?.current?.classList.remove('border-secondary')
    }






    return (
        <div ref={containerRef} className={`rounded-full px-4 py-2 bg-white flex space-x-4 md:px-8 md:py-2 `} onFocus={handleFocus} onBlur={handleBlur} >
            <input ref={inputRef} className="w-full disabled:bg-secondary-100 disabled:text-secondary-200 disabled:cursor-not-allowed focus:outline-0" {...props} />
            {children}
        </div>

    )
}