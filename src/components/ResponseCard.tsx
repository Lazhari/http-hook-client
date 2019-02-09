import React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ReactJson, { ReactJsonViewProps } from 'react-json-view';
import toJsonSchema from 'to-json-schema';

type OwnProps = {
    data: any;
};

type Props = OwnProps & WithStyles<typeof styles>;

const jsonViewerProps: ReactJsonViewProps = {
    src: {},
    style: {
        background: 'transparent'
    },
    collapseStringsAfterLength: 20,
    indentWidth: 2,
    collapsed: 2,
    theme: 'colors',
    iconStyle: 'square'
};

const ResponseCard: React.FunctionComponent<Props> = ({ classes, data }) => {
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={40}>
                    <Grid item md={6}>
                        <Typography variant="h6">Response</Typography>
                        <ReactJson {...jsonViewerProps} src={data} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6">JSON Schema</Typography>
                        <ReactJson
                            {...jsonViewerProps}
                            src={toJsonSchema(data)}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

const styles = ({ spacing }: Theme) =>
    createStyles({
        root: {
            marginTop: spacing.unit * 2
        }
    });

export default withStyles(styles)(ResponseCard);
