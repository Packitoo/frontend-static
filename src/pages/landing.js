import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LandingHead from '../components/Landing/LandingHead';
import LandingContent from '../components/Landing/LandingContent';

import theme from '../components/Landing/LandingTheme';

const styles = themeStyle => ({
    landing: {
        height: 'auto',
        background: '#ffff',
        '& footer': {
            padding: '0 2em',
            [themeStyle.breakpoints.up('sm')]: {
                padding: '0 4em',
            },
        },
    },

    landingFooter: {
        maxWidth: 900,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.5em .7em',
        borderTop: 'solid 1px #ededed',

        '& p': {
            fontSize: 6,
            opacity: 0.8,
            color: '#57667e',
            [themeStyle.breakpoints.up('sm')]: {
                fontSize: 10,
            },
            [themeStyle.breakpoints.up('md')]: {
                fontSize: '.7em',
            },
        },
    },
});

const LandingPage = ({ classes: { landing, landingFooter } }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <Helmet>
                <title>Packitoo | Welcome on board</title>
            </Helmet>
            <div className={landing}>
                <LandingHead />
                <LandingContent />
                <footer>
                    <section className={landingFooter}>
                        <Typography>
                            2019 copyright all right reserved
                        </Typography>
                        <Typography>Privace & Policy. Faq. Terms</Typography>
                    </section>
                </footer>
            </div>
        </MuiThemeProvider>
    );
};

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
