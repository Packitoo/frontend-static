import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        // borderTop: '1px solid #D9DADC',
        margin: 'auto',
    },
    item: {
        padding: '5px 24px',
    },
    itemText: {
        opacity: 0.8,
        fontSize: 14,
        color: '#57667e',
        marginLeft: '1em',
    },
    icon: {
        color: '#ff6400',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.8em',
        },
    },
});

const LandingList = ({
    classes: {
        root, item, itemText, icon,
    },
    data,
}) => {
    return (
        <div className={root}>
            <List>
                {data.map((txt, index) => (
                    <ListItem className={item} key={index}>
                        <DoneIcon className={icon} />

                        <span className={itemText}>{txt}</span>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

LandingList.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
};

export default withStyles(styles)(LandingList);
