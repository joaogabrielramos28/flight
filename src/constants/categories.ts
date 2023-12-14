import ExhibitionImg from '@assets/exhibition.png';
import ConcertImg from '@assets/song-note.png'
import FestivalImg from '@assets/festival.png'
import PartyImg from '@assets/party.png'
import MovieImg from '@assets/movie.png'
import CulinaryImg from '@assets/food.png'
import SportImg from '@assets/sport.png'
import KidImg from '@assets/kid.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface ICategories {
    path: string;
    name: string;
    icon: StaticImport;
}


export enum CategoriesEnum {
    CONCERTS = "Concerts",
    EXHIBITIONS = "Exhibitions",
    FESTIVALS = "Festivals",
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
        icon: ConcertImg
    },
    {
        path: '/categories/exhibitions',
        name: CategoriesEnum.EXHIBITIONS,
        icon: ExhibitionImg
    },
    {
        path: '/categories/festivals',
        name: CategoriesEnum.FESTIVALS,
        icon: FestivalImg
    },
    {
        path: '/categories/parties',
        name: CategoriesEnum.PARTIES,
        icon: PartyImg
    },
    {
        path: '/categories/movies',
        name: CategoriesEnum.MOVIES,
        icon: MovieImg
    },
    {
        path: '/categories/culinary',
        name: CategoriesEnum.CULINARY,
        icon: CulinaryImg
    },
    {
        path: '/categories/sports',
        name: CategoriesEnum.SPORTS,
        icon: SportImg
    },
    {
        path: '/categories/kids',
        name: CategoriesEnum.KIDS,
        icon: KidImg
    },
]