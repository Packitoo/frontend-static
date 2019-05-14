import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

import { cardTxt } from './LCStyle';

import atelierFeliImg from '../../images/landing/slider_img/atelier_felicette.png';
import boiteMetalImg from '../../images/landing/slider_img/boite_metal.png';
import coffretAimantImg from '../../images/landing/slider_img/coffret_aimant.png';
import coffretParfumImg from '../../images/landing/slider_img/coffret_parfum.png';
import mielParisImg from '../../images/landing/slider_img/miel_paris.png';
import pullinImg from '../../images/landing/slider_img/pullin.png';

const styles = theme => ({
    root: {
        position: 'relative',
        maxWidth: 1200,
        width: 300,
        height: 300,
        margin: 'auto',
        overflow: 'hidden',

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

        [theme.breakpoints.up('sm')]: {
            width: 600,
        },
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            height: 400,
            margin: 'auto',
        },
    },

    '@keyframes moveSlideshow': {
        '100%': {
            transform: 'translateX(-150%)',
        },
    },

    gridList: {
        width: 1200,
        overflow: 'initial',
        flexWrap: 'nowrap',
        transform: 'translate3d(0,0,0)',
        animation: 'moveSlideshow 30s linear infinite',
    },

    title: {
        color: theme.palette.primary.light,
    },

    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    imgFake: {
        width: 350,
        height: '100%',
        backgroundColor: '#f0f0f361',
        boxShadow: '0 20px 50px 0 rgba(46, 65, 90, 0.1)',

        '& img': {
            width: '85%',

            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
        },

        '& h3': {
            ...cardTxt,
            textAlign: 'center',
            position: 'absolute',
            bottom: '2em',
            left: '50%',
            transform: 'translateX(-50%)',
        },
    },
});

class LandingSlider extends React.Component {
    constructor() {
        super();
        this.slider = React.createRef();
    }

    render() {
        const {
            classes: { root, gridList, imgFake },
        } = this.props;

        return (
            <div className={root}>
                <GridList
                    cols={4}
                    spacing={15}
                    ref={this.slider}
                    cellHeight="auto"
                    className={gridList}
                >
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={boiteMetalImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Boîte Metal
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={atelierFeliImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Atelier Félicette
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={coffretAimantImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Coffret fermeture par aimant
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={coffretParfumImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Coffret Parfum
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={mielParisImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Miel de Paris
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={pullinImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Sac Pullin
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={boiteMetalImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Boîte Metal
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={atelierFeliImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Atelier Félicette
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={coffretAimantImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Coffret fermeture par aimant
                            </Typography>
                        </div>
                    </GridListTile>
                    <GridListTile>
                        <div className={imgFake}>
                            <img src={coffretParfumImg} alt="Pullin brand" />
                            <Typography variant="subheading">
                                Coffret Parfum
                            </Typography>
                        </div>
                    </GridListTile>
                </GridList>
            </div>
        );
    }
}

LandingSlider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingSlider);
