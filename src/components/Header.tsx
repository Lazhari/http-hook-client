import React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import logo from '../logo.svg';

type Props = WithStyles<typeof styles>;

const Header: React.FunctionComponent<Props> = ({ classes }) => {
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <img
                    src={logo}
                    alt="HOok HTTP Client"
                    className={classes.logo}
                />
                <Typography variant="h6">HooK Client</Typography>
            </Toolbar>
        </AppBar>
    );
};

const styles = ({ spacing }: Theme) =>
    createStyles({
        logo: {
            height: spacing.unit * 8
        },
        appBar: {
            position: 'relative'
        }
    });

export default withStyles(styles)(Header);
