import React,{ useEffect } from "react";
import Login from "./Login"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import Payment from "./Payment";
import Signup from "./Signup"
import { BrowserRouter as Router,Switch, Route} from "react-router-dom"
import firebase from "./firebase";
// import Itemcomp from "./Itemcomp"
import Myorders from "./Myorders";
import {useStateValue} from "./StateProvider"
import './app.css'

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=> {
    //will only run onceee when the app component loads..

    firebase.auth().onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        //the user just logged in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      <Switch>

        <Route exact path="/signup">
          <Header/>
          <Signup/>
        </Route>
        
        <Route exact path="/login">
          <Header/>
          <Login/>
        </Route>
        <Route exact path="/checkout"> 
      <Header/>
      <Checkout/>
      </Route>
      {/* <Route exact path="/itempage">
        <Header/>
        <Itemcomp/>
      </Route> */}
      <Route exact path="/payment">
        <Header/>
        <Payment/>
      </Route>
      <Route exact path="/myorders">
        <Header/>
        <Myorders/>
      </Route>
      
        <Route exact path="/">
      <Home/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}
export default App;
