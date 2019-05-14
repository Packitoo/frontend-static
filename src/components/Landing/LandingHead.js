import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import LandingBtn from './LandingBtn';
import HeroTest from '../../images/landing/hero_test.png';

import logoPackitoo from '../../images/packitoo-logo.png';

const styles = theme => ({
    header: {
        height: 'auto',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '2em',
        backgroundColor: '#f8f8f8',
        [theme.breakpoints.up('md')]: {
            margin: '0 auto ',
        },
        [theme.breakpoints.up('xl')]: {
            margin: '0 auto 6em',
        },
    },

    heroPackImg: {
        width: 710,
        position: 'relative',
        right: '3em',

        [theme.breakpoints.up('sm')]: {
            width: '100%',
            left: '8em',
        },
        [theme.breakpoints.up('md')]: {
            left: '0',
        },
    },

    imgBox: {
        width: '100%',
        margin: '1em 0 0',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            margin: '1em 0',
        },
    },

    logo: {
        width: 80,
        [theme.breakpoints.up('sm')]: {
            width: 120,
        },
    },

    content: {
        position: 'absolute',
        top: '52%',
        left: '2em',
        width: 200,
        zIndex: 20,
        transform: 'translateY(-50%)',
        [theme.breakpoints.up('sm')]: {
            left: '3em',
            width: 320,
        },
        [theme.breakpoints.up('md')]: {
            left: '2em',
            width: 410,
        },
        [theme.breakpoints.up('lg')]: {
            left: '2em',
            width: 440,
        },
        [theme.breakpoints.up('xl')]: {
            width: 530,
        },
    },

    headerText: {
        margin: '1em 0',
        color: '#5e656f',
        fontSize: 10,
        [theme.breakpoints.up('md')]: {
            fontSize: '.75em',
            margin: '1em 0',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '.75em',
            margin: '2em 0',
        },
    },
    cover: {
        position: 'absolute',
        width: '100%',
        zIndex: 10,

        '& img': {
            width: '100%',
        },
    },
});

const LandingHead = ({
    classes: {
        header, heroPackImg, content, headerText, logo, imgBox,
    },
}) => {
    return (
        <header className={header}>
            <div className={imgBox}>
                <img
                    className={logo}
                    src={logoPackitoo}
                    alt="Pack background"
                />
            </div>
            <img className={heroPackImg} src={HeroTest} alt="Pack background" />

            <div className={content}>
                <Typography variant="display4">
                    On vous garantit que vous allez être emballé !
                </Typography>
                <Hidden xsDown>
                    <Typography className={headerText}>
                        {'Packitoo est la solution la plus rapide et la plus simple pour tous vos développements de packaging sur mesure. Sacs, boites, coffrets, étuis… faites mieux, plus vite, connectez votre équipe sur Packitoo. '}
                    </Typography>
                </Hidden>
                <LandingBtn>démarrer mon projet</LandingBtn>
            </div>
        </header>
    );
};

LandingHead.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingHead);
