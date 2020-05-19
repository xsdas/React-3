import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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




export default function Register(){
    const classes = useStyles();
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    const onRegister=(e:any)=>{
        e.preventDefault();
         const creds={
            username,
            password
            }
           fetch('http://localhost:3002/api/users/register',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(creds)
        }).then(res=>res.json()).then(data=>{
            console.log(data);
        });
    }

    return(
        <form onSubmit={onRegister} className={classes.root} noValidate autoComplete="off" style={{ marginTop: "20px" }}>
            <Grid container justify="center" spacing={3} alignItems="center" direction="column">
                <h2>Register</h2>
                <Grid item xs={12}>
                    <TextField label="Username" data-testid="contact-name" onChange={(e: any) => setUsername(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Password" type="password" data-testid="contact-name" onChange={(e: any) => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <Button id="RegisterBtn" type="submit" variant="contained" color="primary">Register</Button>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/Login">Already Registered? Login Here</Link>
                </Grid>
            </Grid>

        </form>



    )


}