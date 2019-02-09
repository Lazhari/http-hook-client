import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import deepOrang from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: deepOrang
    },
    typography: {
        useNextVariants: true
    }
});

export default theme;
