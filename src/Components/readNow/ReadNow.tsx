import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DisplayCard from '../displayCard/DisplayCard';
import OnReadLater from '../../Services/OnReadLater';

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

export default function ReadNow() {
  const classes = useStyles();
  const [state, setstate] = useState({ news: [] });

  //fetching data from newsapi.org
  useEffect(()=>{
    fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=ec5203cca1ef4a9d8d848dac55c5524c')
    .then(res => res.json())
    .then(data => setstate({ news: data.articles }));
  },[]);

  //setting the state to news
  const {news} = state;

  //OnReadLater - saving data to read later
  const OnReadLaterClick = (id:any) => {
    console.log(id);
    OnReadLater(id,news);
  }

  //mapping newscard details to dashboard
  return (
    <Grid container direction="column" alignItems="center" justify="center" className={classes.root} data-testid="newsGrid">
    {
        news.map((newsCard: any) => 
        <DisplayCard id={newsCard.source.id} key={newsCard.source.id} onReadLaterClick = {OnReadLaterClick} image = {newsCard.urlToImage} title = {newsCard.title} author = {newsCard.author} description = {newsCard.description}/>
        )
    }
    </Grid>
  );
}