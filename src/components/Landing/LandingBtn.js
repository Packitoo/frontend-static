import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
    btn: {
        fontSize: 12,
        height: 20,
        color: '#ffffff',
        borderRadius: 45,
        marginTop: '2em',
        padding: '.2em 2em',
        backgroundColor: '#d7313d',
        textTransform: 'uppercase',
        boxShadow: '0 14px 30px 0 rgba(163, 48, 53, 0.25)',

        '&:hover': {
            backgroundColor: '#e16971',
        },

        [theme.breakpoints.up('sm')]: {
            marginTop: 0,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.875rem',
            height: 45,
            padding: '.2em 4em',
        },
    },
    btnOutlined: {
        color: '#d7313d',
        border: 'solid 2px #d7313d',
        backgroundColor: 'transparent',
        boxShadow: '0 14px 30px 0 rgba(158, 158, 158, 0.3)',

        '&:hover': {
            color: 'white',
            border: 'none',
            backgroundColor: '#d7313d',
            boxShadow: '0 14px 30px 0 rgba(163, 48, 53, 0.25)',
        },
    },
});

const LandingBtn = ({ classes, children, variant = 'extendedFab' }) => (
    <Button
        variant={variant}
        className={classNames({
            [classes.btn]: true,
            [classes.btnOutlined]: variant === 'outlined',
        })}
        to="/sign-in"
        component={Link}
    >
        {children}
    </Button>
);
LandingBtn.propTypes = {
    variant: PropTypes.string,
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default withStyles(styles)(LandingBtn);
