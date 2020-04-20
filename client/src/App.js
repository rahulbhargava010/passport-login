import React, { PureComponent } from 'react'
import './App.css';
import axios from "axios"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

import { Home, Login, Register, Header, Dashboard, Footer } from "./components"

class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            projects: [],
            cities: [],
            compnies: []
        }
    }

    componentDidMount() {
        // axios.post('http', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

    hanldeLoginSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/users/login', {
          "email": e.target.name.email,
          "password": e.target.name.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    hanldeRegisterSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/users/register', {
          "name": e.target.name.value,
          "email": e.target.name.email,
          "password": e.target.name.password,
          "password2": e.target.name.password2
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    } 

    hanldeExpenseSubmit = async (e) => {
      e.preventDefault()
      axios.post('http://localhost:5000/users/register', {
        "name": e.target.name.value,
        "email": e.target.name.email,
        "password": e.target.name.password,
        "password2": e.target.name.password2
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });

  } 

    render() {
        return (
          <Router> 
            <div>
              <Switch>
                  <Route exact path='/' component = { Home }></Route> 
                  <Route exact path='/header' component = { Header }></Route>
                  <Route exact path='/users/login' render={() => (<Login hanldeLoginSubmit ={ this.hanldeLoginSubmit } />)}></Route>
                  <Route exact path='/users/register' render={() => (<Register hanldeRegisterSubmit ={ this.hanldeRegisterSubmit } />)}></Route>
                  <Route exact path='/footer' component = { Footer }></Route> 
                  <Route exact path='/dashboard' component = { Dashboard }></Route> 
              </Switch> 
            </div> 
          </Router>
        )
    }
}

export default App