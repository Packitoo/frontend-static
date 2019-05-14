import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import flagFR from '../images/icons/flag-FR.png';
import flagEN from '../images/icons/flag-EN.png';

const Flags = ({ classes: { separator } }) => {
    return (
        <div>
            <Button>
                <img
                    src={flagFR}
                    alt="FR-flag"
                />
                    FR
            </Button>

            <span className={separator} />
            <Button>
                <img
                    src={flagEN}
                    alt="EN-flag"
                />
                    EN
            </Button>
        </div>
    );
};

const styles = {
    separator: {
        height: 'auto',
        margin: '6px 0',
        borderRight: 'solid 2px gray',
    },
};

export default withStyles(styles)(Flags);
