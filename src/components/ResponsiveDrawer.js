import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import { withTranslation } from 'react-i18next';

import classNames from 'classnames';
import LocalBar from './LocalBar';
import logo from '../images/packitoo-logo.png';
import Menu from './Menu';

const drawerWidth = 240;
const webAppUrl = process.env.REACT_APP_WEB_APP_URL;

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const {
            t,
            user,
            theme,
            classes,

        } = this.props;
        const drawer = (
            <div>
                <Menu />
            </div>
        );

        return (
            <div>
                <AppBar position="static" className={classes.appBar}>
                    <Hidden smDown>
                        <LocalBar />
                    </Hidden>

                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>

                        <ButtonBase
                            component={Link}
                            to="/landing"
                        >
                            <img
                                src={logo}
                                alt="logo"
                                className={classes.logo}
                            />
                        </ButtonBase>

                        <div className={classes.menu}>
                            <Hidden smDown>
                                <Button
                                    component={Link}
                                    to="/landing"
                                    className={classes.buttonBar}
                                >
                                    {t('navigation.home')}
                                </Button>


                                <Button
                                    component={Link}
                                    className={classes.buttonBar}
                                    to="/landing"
                                >
                                    {t('navigation.packitooLab')}
                                </Button>

                                <Button
                                    component={Link}
                                    className={classes.buttonBar}
                                    to="/landing"
                                >
                                    {t('navigation.galleryPublic')}
                                </Button>

                                <Button
                                    href={process.env.REACT_APP_BLOG_URL}
                                    className={classes.buttonBar}
                                >
                                    {t('navigation.blog')}
                                </Button>
                            </Hidden>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Hidden smDown>
                                {user ? (
                                    <Fragment>
                                        <Button
                                            className={classNames(
                                                classes.buttonBar,
                                                classes.actionBtn,
                                            )}
                                            href={webAppUrl}
                                            component="a"
                                            variant="contained"
                                        >
                                            {t('navigation.goToMySpace')}
                                        </Button>

                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <Button
                                            className={classes.buttonBar}
                                            style={{
                                                minHeight: 45,
                                                marginRight: 16,
                                                color: '#fff',
                                                background: '#b51421',
                                            }}
                                            component={Link}
                                            to="/landing"
                                            variant="contained"
                                            color="secondary"
                                        >
                                            {t('navigation.createAccount')}
                                        </Button>
                                        <Button
                                            className={classes.buttonBar}
                                            style={{
                                                minHeight: 45,
                                                backgroundColor: '#FFF',
                                                color: '#0f2e42',
                                                fontWeight: 600,
                                                boxShadow: 'none',
                                            }}
                                            component={Link}
                                            to="/landing"
                                            variant="contained"
                                            color="secondary"
                                        >
                                            {t('navigation.connect')}
                                        </Button>
                                    </Fragment>
                                )}
                            </Hidden>
                        </div>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

const styles = theme => ({

    navIconHide: {
        color: '#000',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: {
        justifyContent: 'space-between',
        paddingLeft: 4,
        paddingRight: 4,
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    appBar: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
    menu: {
        margin: 'auto',

        '& a': {
            borderRadius: '4px 4px 0 0',

            '&:focus': {
                borderBottom: 'solid 2px red',
            },
        },
    },
    buttonBar: {
        fontSize: 11,
        minHeight: 64,
        fontWeight: 500,
        color: '#000',
    },
    actionBtn: {
        backgroundColor: '#FFF',
        minHeight: 45,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 45,
        fontSize: 12,
    },
    logo: {
        maxHeight: 30,
        [theme.breakpoints.up('md')]: {
            maxHeight: 50,
        },

    },
});

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    area: PropTypes.oneOf(['client', 'supplier']),
};

ResponsiveDrawer.defaultProps = {
    area: null,
};

export default withStyles(styles, { withTheme: true })(withTranslation()(ResponsiveDrawer));
