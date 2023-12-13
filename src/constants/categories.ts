export interface ICategories {
    path: string;
    name: string;
    icon: string;
}


export const categories:ICategories[] = [
    {
        path: '/categories/concerts',
        name:"Concerts",
        icon:require('../app/assets/song-note.png')
    },
    {
        path: '/categories/exhibitions',
        name:"Exhibitions",
        icon:require('../app/assets/exhibition.png')
    },
    {
        path: '/categories/festivals',
        name:"Festivals",
        icon:require('../app/assets/festival.png')
    },
    {
        path: '/categories/parties',
        name:"Parties",
        icon:require('../app/assets/party.png')
    },
    {
        path: '/categories/movies',
        name:"Movies",
        icon:require('../app/assets/movie.png')
    },
    {
        path: '/categories/culinary',
        name:"Culinary",
        icon:require('../app/assets/food.png')
    },
    {
        path: '/categories/sports',
        name:"Sports",
        icon:require('../app/assets/sport.png')
    },
    {
        path: '/categories/kids',
        name:"Kids",
        icon:require('../app/assets/kid.png')
    },
]