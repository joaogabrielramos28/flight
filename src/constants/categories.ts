export interface ICategories {
    path: string;
    name: string;
    icon: string;
}


export const categories:ICategories[] = [
    {
        path: '/categories/concerts',
        name:"Concerts",
        icon:require('@assets/song-note.png')
    },
    {
        path: '/categories/exhibitions',
        name:"Exhibitions",
        icon:require('@assets/exhibition.png')
    },
    {
        path: '/categories/festivals',
        name:"Festivals",
        icon:require('@assets/festival.png')
    },
    {
        path: '/categories/parties',
        name:"Parties",
        icon:require('@assets/party.png')
    },
    {
        path: '/categories/movies',
        name:"Movies",
        icon:require('@assets/movie.png')
    },
    {
        path: '/categories/culinary',
        name:"Culinary",
        icon:require('@assets/food.png')
    },
    {
        path: '/categories/sports',
        name:"Sports",
        icon:require('@assets/sport.png')
    },
    {
        path: '/categories/kids',
        name:"Kids",
        icon:require('@assets/kid.png')
    },
]