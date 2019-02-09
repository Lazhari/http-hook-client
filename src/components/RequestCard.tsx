import React, { useRef } from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

import ResponseCard from './ResponseCard';
import BoxIcon from './BoxIcon';

type Props = WithStyles<typeof styles>;

const RequestCard: React.FunctionComponent<Props> = ({ classes }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleLoad = () => {
        console.log(inputRef.current!!.value);
    };
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={8}>
                        <Grid item md={10}>
                            <TextField
                                label="Your Request URL"
                                placeholder="https://randomuser.me/api/"
                                fullWidth
                                inputRef={inputRef}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={2}>
                            <Button
                                className={classes.button}
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleLoad}
                            >
                                Send
                                <SendIcon className={classes.iconRight} />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Grid container justify="center" className={classes.boxContainer}>
                <BoxIcon height="128" width="128" color="#9e9e9e" />
            </Grid>
            <ResponseCard />
        </>
    );
};

const styles = ({ spacing }: Theme) =>
    createStyles({
        root: {
            marginTop: spacing.unit * 2
        },
        button: {
            height: '100%'
        },
        iconRight: {
            marginLeft: spacing.unit
        },
        boxContainer: {
            marginTop: spacing.unit * 2
        }
    });

export default withStyles(styles)(RequestCard);
