import Image from 'next/image'

import HomeBg from '@assets/home-bg.jpg'
import Search from '@assets/search.png'
import { categories } from '@constants/categories'
import { Input, FestivalCard } from '@components/index'

import { CategoryItem, Filters } from './components'


export default function Home() {
  return (
    <main >

      <section className='w-full relative'>
        <Image
          className='w-full h-96 object-cover object-center absolute -z-10 md:h-180'
          src={HomeBg}
          alt=''
        />
        <div className=' w-full h-96 absolute inset-0 -z-10  bg-black opacity-50 md:h-180' />


        <div className='flex flex-col items-center justify-center z-10 h-96 md:h-180'>
          <h2 className='text-white font-bold text-4xl'>
            Unlock the stage to
          </h2>
          <h3 className='text-primary font-bold text-4xl mt-4'>
            unforgettable sounds.
          </h3>
          <div className='w-96 mt-8 md:w-180'>
            <Input id='test' placeholder='Search for event' >
              <button className="rounded-full bg-secondary p-4">
                <Image src={Search} alt='Lupa de pesquisa' className='w-5' />
              </button>
            </Input>
            <p className='mt-8 text-center text-white text-lg '>
              Get tickets to gigs, parties and festivals <br /> for the <b className='text-primary'>best price</b> in the market.
            </p>
          </div>


        </div>

      </section>


      <section className='p-12 grid grid-rows-2 gap-6 xl:grid-cols-6 md:grid-cols-4 '>
        {categories.map((category) => (
          <CategoryItem key={category.name} {...category} />

        ))}
      </section>


      <section className='p-12 bg-gray-300'>
        <h2 className='text-3xl font-semibold'>Popular</h2>

        <Filters />

        <div className='mt-12 flex flex-wrap gap-8'>

          {Array(4).fill(0).map((_, index) => (
            <FestivalCard key={index} />

          ))}

        </div>
        <h2 className='text-3xl mt-12'>Next releases</h2>
        <div className='mt-12 flex flex-wrap gap-8'>

          {Array(4).fill(0).map((_, index) => (
            <FestivalCard key={index} />

          ))}

        </div>

      </section>

    </main>

  )
}
