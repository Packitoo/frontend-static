import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Flags from './Flags';

const LocalBar = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Button
                to="/home"
                component={Link}
            >
            Client Area
            </Button>
            <Button
                to="/home"
                component={Link}
            >
            Supplier Area
            </Button>
            <Flags />
        </div>
    );
};

const styles = {
    root: {
        fontSize: 10,
        color: '#000',
        display: 'flex',
        marginBottom: '2em',
        justifyContent: 'flex-end',

        '& a': {
            color: '#fff',
            background: '#133273',
            borderRadius: '0 0 4px 4px',
        },
        '& a:nth-child(0n+2)': {
            color: '#5a6070',
            marginLeft: '1em',
            background: '#f7f8fb',
        },
        '& img': {
            marginRight: '.7em',
        },
    },


};

export default withStyles(styles)(LocalBar);
