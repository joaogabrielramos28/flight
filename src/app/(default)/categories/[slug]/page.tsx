
import { Button, FestivalCard } from "@components/index";


import { Calendar, MapPin } from '@phosphor-icons/react/dist/ssr'
import { GenreFilter } from "./components";
import { capitalize } from "@utils/capitalize";
import { categories } from "@constants/categories";



export default function CategoryPage({ params }: { params: { slug: string } }) {
    const backgroundImg = categories.find(category => category.name === capitalize(params.slug))?.background;



    return (
        <main className="w-full">
            <div className=" px-8 w-full flex items-center h-180 bg-center" style={{ backgroundImage: `url(${backgroundImg ? backgroundImg.src : ""})` }}>
                <h1 className="text-white font-semibold text-6xl capitalize">{params.slug}</h1>
            </div>

            <section className="p-8 flex space-x-4">
                <Button>
                    <MapPin weight="fill" size={22} />
                    Location
                </Button>

                <Button>
                    <Calendar size={22} />
                    Date
                </Button>
            </section>

            <div className="p-8 w-full">
                <h2 className="text-center text-2xl font-semibold">Categories</h2>
                <GenreFilter type={capitalize(params.slug)} />
            </div>


            <div className="bg-gray-100 p-8 flex flex-wrap gap-6 justify-center">
                {Array(12).fill(0).map((_, index) => (
                    <FestivalCard key={index} />
                ))}
            </div>
        </main >
    );
}