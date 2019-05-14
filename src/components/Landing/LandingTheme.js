import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Circular Medium"',
            '"Poppins-Medium"',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
        ].join(','),

        display4: {
            fontSize: 20,
            color: '#222a41',
            [defaultTheme.breakpoints.between('sm', 'md')]: {
                fontSize: 30,
            },
            [defaultTheme.breakpoints.up('md')]: {
                fontSize: 38,
            },
            [defaultTheme.breakpoints.up('lg')]: {
                fontSize: 42,
            },
            [defaultTheme.breakpoints.up('xl')]: {
                fontSize: 60,
            },
        },

        display3: {
            fontSize: 20,
            color: '#233d63',
            letterSpacing: 3.6,
            textTransform: 'uppercase',

            [defaultTheme.breakpoints.down('sm')]: {
                fontSize: 18,
            },
        },

        display2: {
            fontSize: 20,
            color: '#233d63',
            textTransform: 'uppercase',

            [defaultTheme.breakpoints.up('sm')]: {
                fontSize: 24,
            },
        },

        secondary: {
            opacity: 0.8,
            color: '#57667e',
        },
    },
});

export default theme;
