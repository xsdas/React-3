import React from 'react';
import Header from './Components/header/Header';
import ReadNow from './Components/readNow/ReadNow';
import Footer from './Components/footer/Footer';
import Register from './Components/register/Register';
import Login from './Components/login/Login';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Add the components here
function App() {
  return (
    
  <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={()=>localStorage.getItem('token') ? <Register /> : <Redirect to="/Login"/>} />
          <Route exact path ="/Readlater" component= {() => localStorage.getItem('token') ? <ReadNow /> : <Redirect to="/Login" />}/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path="/Login" component={Login}/>
          </Switch>
        <Footer brand="StackRoute"/>
      </div>
    </Router>
  )
}

export default App;
