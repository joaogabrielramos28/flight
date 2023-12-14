import ExhibitionImg from '@assets/exhibition.png';
import ConcertImg from '@assets/song-note.png'
import PartyImg from '@assets/party.png'
import MovieImg from '@assets/movie.png'
import CulinaryImg from '@assets/food.png'
import SportImg from '@assets/sport.png'
import KidImg from '@assets/kid.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { concertsImages, exhibitionsImages } from '@assets/index';

type FiltersType = {
    name: string;
    image: StaticImport;
}

export interface ICategories {
    path: string;
    name: string;
    icon: StaticImport;
    background?: StaticImport
    filters?: FiltersType[];
}



export enum CategoriesEnum {
    CONCERTS = "Concerts",
    EXHIBITIONS = "Exhibitions",
    PARTIES = "Parties",
    MOVIES = "Movies",
    CULINARY = "Culinary",
    SPORTS = "Sports",
    KIDS = "Kids",

}


export const categories: ICategories[] = [
    {
        path: '/categories/concerts',
        name: CategoriesEnum.CONCERTS,
        icon: ConcertImg,
        background: concertsImages.Background,
        filters: [
            {
                name: "Rock",
                image: concertsImages.Rock,
            },
            {
                name: "Electronic",
                image: concertsImages.Electronic,
            },
            {
                name: "Pop",
                image: concertsImages.Pop,
            },
            {
                name: "Indie",
                image: concertsImages.Indie,
            }
        ]
    },
    {
        path: '/categories/exhibitions',
        name: CategoriesEnum.EXHIBITIONS,
        icon: ExhibitionImg,
        background: exhibitionsImages.Background,
        filters: [
            {
                name: "Painting",
                image: exhibitionsImages.Painting,
            },
            {
                name: "Sculpture",
                image: exhibitionsImages.Sculpture,
            },
            {
                name: "Photography",
                image: exhibitionsImages.Photography,
            },
            {
                name: "Design",
                image: exhibitionsImages.Design,
            }
        ]
    },
    {
        path: '/categories/parties',
        name: CategoriesEnum.PARTIES,
        icon: PartyImg,
        filters: [
            {
                name: "Nightlife",
                image: "",
            },
            {
                name: "Festival",
                image: "",
            },
            {
                name: "Concert",
                image: "",
            },
            {
                name: "Cocktail",
                image: "",
            }
        ]
    },
    {
        path: '/categories/movies',
        name: CategoriesEnum.MOVIES,
        icon: MovieImg,
        filters: [
            {
                name: "Action",
                image: "",
            },
            {
                name: "Comedy",
                image: "",
            },
            {
                name: "Drama",
                image: "",
            },
            {
                name: "Horror",
                image: "",
            }
        ]
    },
    {
        path: '/categories/culinary',
        name: CategoriesEnum.CULINARY,
        icon: CulinaryImg,
        filters: [
            {
                name: "Italian",
                image: "",
            },
            {
                name: "French",
                image: "",
            },
            {
                name: "Japanese",
                image: "",
            },
            {
                name: "Chinese",
                image: "",
            }
        ]
    },
    {
        path: '/categories/sports',
        name: CategoriesEnum.SPORTS,
        icon: SportImg,
        filters: [
            {
                name: "Football",
                image: "",
            },
            {
                name: "Basketball",
                image: "",
            },
            {
                name: "Tennis",
                image: "",
            },
            {
                name: "Volleyball",
                image: "",
            }
        ]
    },
    {
        path: '/categories/kids',
        name: CategoriesEnum.KIDS,
        icon: KidImg,
        filters: [
            {
                name: "Playground",
                image: "",
            },
            {
                name: "Museum",
                image: "",
            },
            {
                name: "Park",
                image: "",
            },
            {
                name: "Cinema",
                image: "",
            }
        ]
    },
]