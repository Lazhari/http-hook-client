import React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import GithubIcon from './GithubIcon';
import logo from '../logo.svg';

type Props = WithStyles<typeof styles>;

const Header: React.FunctionComponent<Props> = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img
                        src={logo}
                        alt="HOok HTTP Client"
                        className={classes.logo}
                    />
                    <Typography variant="h6" className={classes.grow}>
                        HooK Client
                    </Typography>
                    <Button color="inherit">
                        <Link
                            href="https://github.com/Lazhari/http-hook-client"
                            target="_blank"
                        >
                            <GithubIcon height="48" width="48" />
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const styles = ({ spacing }: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        grow: {
            flexGrow: 1
        },
        logo: {
            height: spacing.unit * 8
        }
    });

export default withStyles(styles)(Header);
