import React from 'react';
import { Link } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const NavBar = () => {
    return (
        <div>

            <AppBar position="static" color="default">
                <Toolbar>
                    <Link to="/home">Home</Link>
                    <Link to="/landing">Landing</Link>
                </Toolbar>
            </AppBar>

        </div>
    );
};

const styles = {
    root: {
        fontSize: 12,
    },
};

export default withStyles(styles)(NavBar);
