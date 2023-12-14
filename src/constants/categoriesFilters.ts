
type FiltersType = {
    name: string;
    image: string;
}

export type CategoriesFiltersType = {
    name: string;
    filters: FiltersType[];
}


export const categoriesFilters: CategoriesFiltersType[] = [
    {
        name: "Concerts",
        filters: [
            {
                name: "Rock",
                image: "",
            },
            {
                name: "Electronic",
                image: "",
            },
            {
                name: "Pop",
                image: "",
            },
            {
                name: "Indie",
                image: "",
            }
        ]
    }
]
