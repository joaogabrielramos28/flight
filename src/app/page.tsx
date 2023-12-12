import Image from 'next/image'
import HomeBg from '@/app/assets/home-bg.jpg'


export default function Home() {
  return (
      <Image
        style={{
          width: '100%',
        }}
        quality={100}
        src={HomeBg}
        alt=''
        height={720}
      />

  )
}
