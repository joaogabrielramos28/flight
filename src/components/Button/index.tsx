import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


type ButtonProps = {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outlined'

}

const variants = {
    primary: 'bg-primary hover:bg-blue-700 text-white font-bold ',
    secondary: 'bg-secondary hover:bg-blue-700 text-white font-bold ',
    outlined: 'border border-gray-500 text-black font-semibold'
}


export const Button = ({ children, variant = "outlined" }: ButtonProps) => {

    return (
        <button className={`flex items-center gap-2 font-bold py-3 px-4 rounded-xl ${variants[variant]}`}>
            {children}
        </button>
    );
}




