import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from 'react-i18next';
import { Link } from 'gatsby';


// const landingSiteUrl = process.env.REACT_APP_LANDING_SITE_URL;

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    menuItem: {
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'uppercase',
    },
});

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes, t, lng } = this.props;

        return (
            <List>
                <ListItem
                    component={Link}
                    to="/landing"
                >
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                {t('navigation.home')}
                            </Typography>
                        )}
                    />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/landing"
                >
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                {t('navigation.howItWork')}
                            </Typography>
                        )}
                    />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/landing"
                >
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                {t('navigation.packitooLab')}
                            </Typography>
                        )}
                    />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/landing"
                >
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                {t('navigation.galleryPublic')}
                            </Typography>
                        )}
                    />
                </ListItem>
                <ListItem component="a" href="https://blog.packitoo.com/">
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                {t('navigation.blog')}
                            </Typography>
                        )}
                    />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/landing"
                >
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                {t('navigation.clientArea')}
                            </Typography>
                        )}
                    />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/landing"
                >
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                {t('navigation.supplierArea')}
                            </Typography>
                        )}
                    />
                </ListItem>

                <ListItem>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/landing"
                    >
                        {t('navigation.createAccount')}
                    </Button>
                </ListItem>
                <ListItem>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/landing"
                    >
                        {t('navigation.connect')}
                    </Button>
                </ListItem>

                <ListItem component="a" href="tel:+33533091394">
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                +33 5 33 09 13 94
                            </Typography>
                        )}
                    />
                </ListItem>

                <ListItem component="a" href="mailto:contact@packitoo.com">
                    <ListItemText
                        primary={(
                            <Typography className={classes.menuItem}>
                                contact@packitoo.com
                            </Typography>
                        )}
                    />
                </ListItem>
            </List>
        );
    }
}

export default withTranslation()(withStyles(styles)(Menu));
