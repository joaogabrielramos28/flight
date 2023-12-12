import { Grid, Button, Box } from '@mui/material'
import Image from 'next/image'
import HomeBg from '@/app/assets/home-bg.jpg'


export default function Home() {
  return (
    <Grid container xs={12}>


      <Image
        style={{
          width: '100%',
        }}
        quality={100}
        src={HomeBg}
        alt=''
        height={720}
      />

    </Grid>
  )
}
