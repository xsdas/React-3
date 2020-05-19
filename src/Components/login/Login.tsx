import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));




export default function Login(props:any){
    const classes = useStyles();
    const[open, setOpen] = React.useState(false);
    const[message, setMessage] = useState('');
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    const onLogin=(e:any)=>{
        e.preventDefault();
         const creds={
            username,
            password
            }
           fetch('http://localhost:3001/auth/v1',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(creds)
        }).then(res=>res.json()).then(data=>{
            console.log(data);
        if(data.token){
            console.log("Begin 200");
           var i= localStorage.setItem('token', data.token);
           console.log(i);
            props.history.push('/');
            
        }else {
            setMessage(data.message);
            setOpen(true);
        }           

        });
    }

    return(
        <div>
        <form onSubmit={onLogin} className={classes.root} noValidate autoComplete="off" style={{ marginTop: "20px" }}>
            <Grid container justify="center" spacing={3} alignItems="center" direction="column">
                <h2>Login</h2>
                <Grid item xs={12}>
                    <TextField id="username" label="Username" data-testid="contact-name" onChange={(e: any) => setUsername(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" label="Password" type="password" onChange={(e: any) => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <Button id="loginButton" type="submit" variant="contained" color="primary">Submit</Button>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/Register">New User? Register Here</Link>
                </Grid>
            </Grid>

        </form>

<Snackbar
anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
}}
open={open}
autoHideDuration={6000}
onClose={() => setOpen(false)}
message={message}
action={
    <React.Fragment>
        <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>
}
/>
</div>


    )


}