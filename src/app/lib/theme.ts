import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
    },

    typography: {
        fontFamily: roboto.style.fontFamily,
        allVariants: {
            color: '#000',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    color: '#000',
                    transition: 'all 0.3s ease',
                    padding: '0.5rem 1.4rem',
                    borderRadius: '1rem',
                    borderColor: '#000',
                    ":hover": {
                        borderColor: '#000',
                        opacity: 0.6,

                    }

                },


            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#000',
                    textDecoration: 'none',


                    ":hover": {
                        color: '#000',
                        opacity: 0.6,

                    }

                },
            }
        }
    },

});

export default theme;