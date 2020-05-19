import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InfoIcon from '@material-ui/icons/Info';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    },
    menuButton: {
        marginRight : theme.spacing(2)
    },
    title: {
        flexGrow:1
    }
}));
const Header = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" data-testid="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} data-testid="news">News</Typography>
                    <HomeIcon/><Button color="inherit"  data-testid="home" component={RouterLink} to="/"   >Home</Button>
                    <InfoIcon/><Button id = "readLaterButton" color="inherit"  data-testid="aboutButton" component={RouterLink} to="/ReadLater">ReadNow</Button>
                    <Button  id = "registerButton"color="inherit"  data-testid="register" component={RouterLink} to="/Register">Register</Button>
                   
                    <VpnKeyIcon/><Button color="inherit" data-testid="login" component={RouterLink} to="/Login">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Header);