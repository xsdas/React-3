import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer:{
        flexGrow:1,
        textAlign:"center"
    }
}));
const Footer = (props:any) => {
    const classes = useStyles();
    return(
        <footer>
        <div data-testid="footer">
            <h3 className={classes.footer}>Copyright &copy; {props.brand} 2020</h3>
        </div>
        </footer>
    );
}

export default Footer;