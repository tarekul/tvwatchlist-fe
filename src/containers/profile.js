import React, {Component} from 'react'
import axios from 'axios'
import ShowShows from '../components/showShows'

class Profile extends Component{
    state ={
        shows:null,
        username:null
    }

    componentDidMount(){
        const {user_id} = this.props.match.params
        console.log('user_id',user_id)
        axios.get(`https://tvmovielistapi.herokuapp.com/user/${user_id}`)
        .then(response=>this.setState({username:response.data.username}))
        
        axios.get(`https://tvmovielistapi.herokuapp.com/show/${user_id}/user`)
        .then(response=>{
            this.setState({shows:response.data})
        })
    }

    render(){
        console.log(this.state)
        const username = this.state.username ? <h5>{this.state.username}</h5> : ''
        return <>
            {username}
            <ShowShows shows={this.state.shows} />
            </>
    }
}

export default Profile
