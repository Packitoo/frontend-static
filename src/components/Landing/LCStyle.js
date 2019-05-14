const subSize = 14;
const title3Size = 20;
const subTitle = {
    fontSize: '1.125rem',
    color: '#233d63',
};

export const cardTxt = {
    opacity: 0.8,
    color: '#57667e',
    fontSize: subSize,

    textAlign: 'left',
};

export const styles = theme => ({
    container: {
        maxWidth: 1000,
        margin: '0 auto ',
        padding: '0 0 3em',
    },

    top: {
        '& .icon': {
            height: 120,
        },
    },

    middle: {
        backgroundColor: '#f8f8f8',
    },

    wrapper: {
        maxWidth: 350,
        width: 300,
        margin: 'auto',

        [theme.breakpoints.up('sm')]: {
            width: 350,
        },
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            maxWidth: 'none',
        },
    },

    itemBox: {
        textAlign: 'center',
    },

    itemBoxMiddle: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '2em ',
            marginBottom: '2em ',
        },
    },

    iconTop: {
        height: 120,
    },

    iconMid: {
        height: 100,
    },

    qiTitle: {
        ...subTitle,
        margin: '1.5em 0 ',
        fontSize: title3Size,
    },

    qiTxt: {
        color: '#788497',
        margin: '0 1em',
        fontSize: subSize,
        fontFamily: '"Circular Book"',
    },

    strong: {
        fontFamily: '"Circular Black"',
    },

    card: {
        padding: '2em 0 2em',
        boxShadow: '0 10px 50px 0 rgba(0, 0, 0, 0.05)',
        transitionDuration: '.15s',
        transitionTimingFunction: 'ease-out',
        transform: 'translateY(0)',

        '&:hover': {
            transitionDuration: '.2s',
            transitionTimingFunction: 'ease-out',
            transform: 'translateY(-5px)',
            boxShadow: '0px 14px 32px 0px rgba(0, 0, 0, 0.2)',
        },
        '& hr': {
            margin: '1em 2em',
            opacity: '.3',
        },
    },

    cardTitle: {
        ...subTitle,
        margin: '1em 0 0',
        fontSize: title3Size,
    },

    cardTxt_left: {
        ...cardTxt,
        margin: '1em 4.5em 1.3em',
    },

    cardTxt: {
        ...cardTxt,
        margin: '0 4.5em 1em',
    },

    cardBoxLink: {
        padding: '0 30px',
        textAlign: 'left',
    },

    cardLink: {
        fontSize: 12,
        margin: '1em 0',
        border: 'none',

        color: '#ff6400',
        backgroundColor: 'transparent',

        display: 'flex',
        alignItems: 'center',
    },

    titleMiddle: {
        padding: '2em 1em',
        letterSpacing: 3.6,
        textAlign: 'center',

        [theme.breakpoints.up('sm')]: {
            padding: '3em 0 ',
        },
    },

    sponsorImg: {
        height: 68,
        width: '100%',
        textAlign: 'center',

        '& img': {
            width: '100%',
            padding: '0.2em 0.5em',
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },
        },
    },

    bottom: {
        maxWidth: 1400,
        margin: 'auto',
    },

    bottomWrapper: {
        height: 'auto',
        margin: '5em 0',
        textAlign: 'center',
        position: 'relative',

        '& img': {
            width: '70%',

            [theme.breakpoints.up('xl')]: {
                width: '100%',
            },
        },
    },
    bottomBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '75%',
        transform: 'translate(-50%,-50%)',

        '& h1': {
            [theme.breakpoints.up('sm')]: {
                marginBottom: '1em',
            },
        },

        [theme.breakpoints.down('sm')]: {
            top: '50%',
            left: '50%',
            width: '90%',
            transform: 'translate(-50%,-50%)',
        },
    },
});
