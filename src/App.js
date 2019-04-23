import React, { Component } from 'react';
import {HashRouter,Route, Switch} from 'react-router-dom'
import axios from 'axios'
import UserContext from './contexts/userContext'
import Header from './components/header'
import Home from './containers/home'
import Users from './containers/user'
import Profile from './containers/profile'
import Post from './containers/post'
import Show from './containers/show'
import Allshows from './containers/allshows'

class App extends Component {
  state = {
    users:null,
    selectedUser:null,
    selectedUserID:null,
    changeSelectedUserState:(username,user_id)=>{
      window.localStorage.setItem('user', JSON.stringify({selectedUser:username,selectedUserID:user_id}))
      this.setState({selectedUser:username,selectedUserID:user_id})
    },
    logout:() =>{
      window.localStorage.clear('user')
      this.setState({selectedUser:null,selectedUserID:null})
    }
  }
  
  componentDidMount(){
    //console.log('here')
    const selected = window.localStorage.getItem('user')
    if(selected){
      const info = JSON.parse(selected)
      this.setState({selectedUser:info.selectedUser,selectedUserID:info.selectedUserID})
    }
    else{
      axios({
        method:'GET',
        url:'https://tvmovielistapi.herokuapp.com/user'
      })
      .then(response=>{
        this.setState({users:response.data},()=>console.log(this.state))
      })
    }
    
  }
  render() {
    return <>
      <HashRouter>
        <UserContext.Provider value={this.state} >
          <Route path='/' render={()=> <Header logout={this.state.logout} />} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={Users} />
            <Route path='/user/post' exact render={(props)=> <Post user_id={this.state.selectedUserID} /> } />
            <Route path='/user/:user_id' exact component={Profile} />
            <Route path='/show/:id' exact component={Show} />
            <Route path='/shows' exact component={Allshows} />
          </Switch>
        </UserContext.Provider>
       
      </HashRouter>
    </>
  }
}

export default App;
