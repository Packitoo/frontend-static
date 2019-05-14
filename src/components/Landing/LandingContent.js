import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import LandingBtn from './LandingBtn';
import LandingList from './LandingList';
import LandingSlider from './LandingSlider';

import moneyIcon from '../../images/landing/icons/money.png';
import rocketIcon from '../../images/landing/icons/rocket.png';
import lifebuoyIcon from '../../images/landing/icons/lifebuoy.png';

import labIcon2x from '../../images/landing/icons/Lab@2x.png';
import sourcingIcon2x from '../../images/landing/icons/Sourcing@2x.png';
import bitmapIcon from '../../images/landing/footer/Bitmap.png';
import bitmapIcon2x from '../../images/landing/footer/Bitmap@2x.png';
import bitmapIcon3x from '../../images/landing/footer/Bitmap@3x.png';

import Partners from '../../images/landing/new_partners.png';

import { styles } from './LCStyle';

const listServicesContent = {
    card1: [
        'Je sais ce que je veux',
        'Je sais décrire mon packaging',
        'J’ai un budget d’au moins 1500€',
    ],
    card2: [
        'J’ai besoin d’être inspiré',
        'Je choisi un packaging pré-configuré et le modifie pour qu’il me ressemble',
        'J’ai un budget d’au moins 1500€',
    ],
    card3: [
        'Je ne sais pas ce que je veux',
        'J’ai besoin de l’accompagnement de spécialistes pour m’aider',
        'Pour l’intégralité de mon projet ou seulement pour une partie',
    ],
};

const LandingContent = ({
    classes: {
        top,
        middle,
        container,
        wrapper,
        iconTop,
        iconMid,
        itemBox,
        itemBoxMiddle,
        qiTitle,
        qiTxt,
        card,
        cardTitle,
        cardTxt,
        cardTxt_left,
        titleMiddle,
        sponsorImg,
        bottom,
        bottomWrapper,
        bottomBox,
        strong,
    },
    t,
}) => {
    return (
        <React.Fragment>
            <section className={top}>
                <div className={container}>
                    <Typography variant="display2" className={titleMiddle}>
                        Réalisez vos packaging personnalisés
                    </Typography>
                    <Grid container spacing={16} className={wrapper}>
                        <Grid sm={12} md={4} item className={itemBox}>
                            <img
                                src={rocketIcon}
                                alt="Fast"
                                className={iconTop}
                                srcSet={`${rocketIcon} 2x`}
                            />
                            <Typography variant="title" className={qiTitle}>
                                Mieux, plus vite
                                {' '}
                            </Typography>
                            <Typography className={qiTxt} variant="subheading">
                                {' '}
                                Notre algorithme vous trouve en moins de 48h*
                                {' '}
                                <span className={strong}>
                                    les meilleurs fournisseurs d’emballages
                                </span>
                                {' '}
                                correspondant aux spécificités de votre projet.
                                {' '}
                            </Typography>

                            <Typography
                                className={qiTxt}
                                variant="subheading"
                                style={{ fontSize: 10, marginTop: '.5em' }}
                            >
                                *Délai moyen constaté
                            </Typography>
                        </Grid>

                        <Grid sm={12} md={4} item className={itemBoxMiddle}>
                            <img
                                src={moneyIcon}
                                alt="Euro"
                                className={iconTop}
                                srcSet={`${moneyIcon} 2x`}
                            />
                            <Typography variant="title" className={qiTitle}>
                                Pour moins cher
                            </Typography>
                            <Typography className={qiTxt} variant="subheading">
                                {' '}
                                L’utilisation de l’application de sourcing de
                                Packitoo est
                                {' '}
                                <span className={strong}>
                                    entièrement gratuite
                                </span>
                                .
                                {' '}
                            </Typography>
                            <Typography className={qiTxt} variant="subheading">
                                Les clients de Packitoo optimisent en moyenne
                                leur budget packaging de
                                {' '}
                                <span className={strong}>plus de 50%</span>
                                .
                            </Typography>
                        </Grid>

                        <Grid sm={12} md={4} item className={itemBox}>
                            <img
                                src={lifebuoyIcon}
                                alt="Support"
                                className={iconTop}
                                srcSet={`${lifebuoyIcon} 2x`}
                            />
                            <Typography variant="title" className={qiTitle}>
                                Assisté par des experts
                            </Typography>
                            <Typography className={qiTxt} variant="subheading">
                                {' '}
                                La science du packaging ne s’apprend pas en un
                                jour. Nos Experts ont des
                                {' '}
                                <span className={strong}>
                                    {' '}
                                    dizaines d’années d’expérience
                                    {' '}
                                </span>
                                et se feront un plaisir de vous aider dans votre
                                projet.
                                {' '}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </section>

            <section className={middle}>
                <div className={container}>
                    <Typography variant="display2" className={titleMiddle}>
                        Configurez votre packaging ou faites appel à nos Experts
                    </Typography>

                    <Grid
                        container
                        spacing={16}
                        className={wrapper}
                        justify="center"
                    >
                        <Grid sm={12} md={5} item className={itemBox}>
                            <Card className={card}>
                                <img
                                    alt="Idea"
                                    className={iconMid}
                                    src={sourcingIcon2x}
                                    srcSet={`${sourcingIcon2x} 2x`}
                                />
                                <Typography
                                    variant="title"
                                    className={cardTitle}
                                >
                                    Matching Intelligent
                                </Typography>
                                <hr />
                                <LandingList data={listServicesContent.card1} />
                                <Typography
                                    className={cardTxt_left}
                                    variant="subheading"
                                >
                                    Notre algorithme vous connecte aux meilleurs
                                    fournisseurs. Ce service est entièrement
                                    gratuit
                                </Typography>

                                <hr />
                                <LandingBtn variant="outlined">
                                    démarrer mon projet
                                </LandingBtn>
                            </Card>
                        </Grid>

                        <Grid sm={12} md={5} item className={itemBox}>
                            <Card className={card}>
                                <img
                                    src={labIcon2x}
                                    alt="Laboratory"
                                    className={iconMid}
                                    srcSet={`${labIcon2x} 2x`}
                                />
                                <Typography
                                    variant="title"
                                    className={cardTitle}
                                >
                                    L'agence Packitoo Lab'
                                </Typography>
                                <hr />
                                <LandingList data={listServicesContent.card3} />
                                <Typography
                                    className={cardTxt}
                                    variant="subheading"
                                >
                                    Nos Experts Packaging vous recontactent pour
                                    définir votre besoin. Accompagnement sur
                                    devis
                                </Typography>
                                <hr />
                                <LandingBtn>Contacter le lab'</LandingBtn>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className={bottom}>
                <Typography variant="display2" className={titleMiddle}>
                    Votre futur packaging : une infinité de possibilités
                </Typography>

                <LandingSlider />

                <div className={container}>
                    <Typography variant="display2" className={titleMiddle}>
                        Ils font confiance à Packitoo
                    </Typography>

                    <div className={sponsorImg}>
                        <img src={Partners} alt="Packitoo Partners" />
                    </div>

                    <div className={bottomWrapper}>
                        <img
                            src={bitmapIcon}
                            alt="Map"
                            srcSet={`${bitmapIcon2x} 2x, ${bitmapIcon3x} 3x`}
                        />
                        <div className={bottomBox}>
                            <Typography variant="display3">
                                Commencez à créer votre packaging dès
                                aujourd’hui ! Rejoignez Packitoo
                            </Typography>
                            <LandingBtn>démarrer mon projet</LandingBtn>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

LandingContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingContent);
