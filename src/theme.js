import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        fontFamily: '\'Poppins-Medium\', \'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#d2101b',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: '#0066ff',
            main: '#0f2e42',
            // dark: will be calculated from palette.secondary.main,
            // contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
});
