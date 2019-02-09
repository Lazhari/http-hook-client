import React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import theme from '../theme';

import Header from './Header';
import RequestCard from './RequestCard';

type Props = WithStyles<typeof styles>;

const App: React.FunctionComponent<Props> = ({ classes }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseLine />
            <Header />
            <main className={classes.root}>
                <div className={classes.layout}>
                    <RequestCard />
                </div>
            </main>
        </MuiThemeProvider>
    );
};

const styles = ({ spacing, breakpoints }: Theme) =>
    createStyles({
        root: {},
        layout: {
            width: 'auto',
            marginLeft: spacing.unit * 3,
            marginRight: spacing.unit * 3,
            [breakpoints.up(1100 + spacing.unit * 3 * 2)]: {
                width: 1100,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }
    });

export default withStyles(styles)(App);
