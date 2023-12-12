import { Button, ButtonBase, Grid, Link as MuiLink, Typography } from '@mui/material'
import Link from 'next/link'


export const Header = () => {
    return (
        <Grid container xs={12} py={2} px={3} >
            <Grid item xs={8} >
                <Typography variant='h3'>Ticketist</Typography>
            </Grid>

            <Grid container gap={6} xs alignItems="center" justifyContent="flex-end">
                <Link href="/">
                    <MuiLink >Browse events</MuiLink>
                </Link>
                <Link href="/">

                    <MuiLink href='/'>Help</MuiLink>
                </Link>
                <Button variant='outlined'>
                    Sign in
                </Button>


            </Grid>
        </Grid>
    )
}
