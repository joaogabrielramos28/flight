import { ICategories } from "@constants/categories"
import Image from "next/image"
import Link from "next/link"


export const CategoryItem = ({ icon, name, path }: ICategories) => {
    return (
        <Link href={path} >
            <button className=" w-full flex  items-center space-x-4 rounded-lg px-4 py-4 border border-gray-400 transition-all hover:border-primary ">
                <Image src={icon} alt={name + "icon"} />
                <span className="font-medium">
                    {name}
                </span>
            </button>
        </Link>


    )
}