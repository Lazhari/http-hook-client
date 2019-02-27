import React, { useRef, useState, ChangeEvent } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import useApi from '../hooks/useApi';
import ResponseCard from './ResponseCard';
import BoxIcon from './BoxIcon';
import CreateAxiosInstance from '../config/AxiosInstanceConfig';
import MethodSelect from './MethodSelect';

type Props = WithStyles<typeof styles>;

const RequestCard: React.FunctionComponent<Props> = ({ classes }) => {
    // this needs to be moved to a higher order component , because it needs to be globaly available.
    const axiosClient = CreateAxiosInstance;

    const [url, setUrl] = useState('https://api.github.com');
    const [method, setMethod] = useState('GET');

    const inputRef = useRef<HTMLInputElement>(null);
    const { isLoading, error, data } = useApi<JSON>(
        { url: url, method: method },
        axiosClient
    );

    const handleLoad = () => {
        inputRef.current!!.value === url || setUrl(inputRef.current!!.value);
    };

    const hundleMethodChange = (newMethod: string) => {
        setMethod(newMethod);
    };

    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={8}>
                        <Grid item md={1} sm={1} xs={12}>
                            <MethodSelect
                                method={method}
                                onChangeHundler={hundleMethodChange}
                            />
                        </Grid>
                        <Grid item md={9} sm={9} xs={12}>
                            <TextField
                                label="Your Request URL"
                                placeholder="https://api.github.com"
                                fullWidth
                                inputRef={inputRef}
                                defaultValue="https://api.github.com"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={2} sm={2} xs={12}>
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
            {!url ||
                (error && (
                    <Grid
                        container
                        justify="center"
                        className={classes.boxContainer}
                    >
                        <BoxIcon
                            height="128"
                            width="128"
                            color={error ? '#f44336' : '#9e9e9e'}
                        />
                    </Grid>
                ))}
            {error && (
                <Typography variant="h6" color="error" align="center">
                    {error}
                </Typography>
            )}
            {isLoading && (
                <Grid
                    container
                    justify="center"
                    className={classes.boxContainer}
                >
                    <CircularProgress />
                </Grid>
            )}
            {data && !isLoading && <ResponseCard data={data} />}
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
