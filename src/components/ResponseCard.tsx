import React from 'react';
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

type Props = WithStyles<typeof styles>;

const ResponseCard: React.FunctionComponent<Props> = ({ classes }) => {
    return (
        <Card className={classes.root}>
            <CardContent>Response Data</CardContent>
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
