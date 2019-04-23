import React,{Component} from 'react'
import axios from 'axios'
import UserContext from '../contexts/userContext'

import ShowUsers from '../components/showUsers'

class Users extends Component{
    state = {
        users:null
    }
    componentDidMount(){
        axios.get('https://tvmovielistapi.herokuapp.com/user/')
        .then(response=>{
            this.setState({users:response.data})
        })
    } 

    render(){
        return <>
        <div class='container mt-5'>
        <UserContext.Consumer>
            {
              state => {
                if (state) return <h6>Hi {state.selectedUser} !</h6>
              }
            }
          </UserContext.Consumer>
        <ShowUsers users={this.state.users} />
        </div>
        </>
    }
}

export default Users