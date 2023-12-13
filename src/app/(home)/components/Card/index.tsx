import Image from "next/image"
import BG from '@assets/home-bg.jpg'


export const FestivalCard = () => {
    return (
        <div className="w-64 flex flex-col bg-white rounded-lg pb-6">
            <Image src={BG} alt="" className="rounded-2xl" />
            <div className="px-4 mt-4 ">
                <h3 className="text-md font-semibold">
                    Echoes of Euphoria (DE)
                </h3>

                <span className="text-xs font-bold text-gray-400">
                    Serenade Square - 17/08/2023, 8 PM
                </span>

                <button className="px-6 py-2 bg-secondary rounded-2xl text-white mt-2 text-sm font-semibold transition-opacity hover:opacity-70">
                    Buy tickets
                </button>
            </div>
        </div>
    )
}