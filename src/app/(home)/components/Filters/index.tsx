'use client'

import { FiltersEnum, filters } from "@/constants/filters"
import { useState } from "react"

export const Filters = () => {
    const [filter, setFilter] = useState<FiltersEnum>(FiltersEnum.ALL)

    return (
        <div className="flex space-x-6 mt-6">

            {Object.values(filters).map((filterItem) => (
                <button
                    key={filterItem}
                    className={`text-lg font-bold ${filterItem === filter ? 'text-secondary decoration-2 underline underline-offset-8  ' : 'text-gray-500'
                        }`}
                    onClick={() => setFilter(filterItem as FiltersEnum)}
                >
                    {filterItem}
                </button>

            ))}

            <button>
                <span>

                </span>
            </button>
        </div>
    )
}