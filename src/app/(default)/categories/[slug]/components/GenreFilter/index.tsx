'use client'
import Image from "next/image"
import BG from '@assets/signin-bg.jpg'

import { CategoriesFiltersType, categoriesFilters } from '@constants/categoriesFilters'
import { useState } from "react"

type GenreFilterProps = {
    type: string
}


export const GenreFilter = ({ type }: GenreFilterProps) => {
    const [filter, setFilter] = useState<string | null>(null)

    const filtersBySlug = categoriesFilters.find(filter => filter.name === type)


    const handleSelectFilter = (filter: string) => {
        setFilter(filter)
    }


    return (
        <div className=" mt-6 flex flex-wrap gap-16 justify-center">
            {filtersBySlug?.filters.map(slugFilter => (
                <button className="flex flex-col space-y-4 items-center" key={slugFilter.name} onClick={() => handleSelectFilter(slugFilter.name)}>
                    <Image src={BG} alt={"concert"} className={`rounded-full w-28 h-28 object-cover ${filter === slugFilter.name && "border-2  border-primary"} `} />
                    <span className={filter === slugFilter.name ? "text-primary font-semibold" : undefined}>{slugFilter.name}</span>
                </button>

            ))}
        </div>
    )
}