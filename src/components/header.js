import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ResponsiveDrawer from './ResponsiveDrawer';

const Header = ({ classes: { root, container } }) => (
    <header className={root}>
        <div className={container}>
            <ResponsiveDrawer />
        </div>
    </header>
);

const styles = {
    root: {
        borderBottom: 'solid .2px #709be780',
    },
    container: {
        maxWidth: 1000,
        margin: '0 auto',
    },
};

export default withStyles(styles)(Header);
