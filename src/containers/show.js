import React, {Component} from 'react'
import axios from 'axios'
import ShowComments from '../components/showComments'
import Commentform from '../components/commentForm'
class Show extends Component{
    state ={
        show_id:null,
        title:null,
        img_url:null,
        genre_name:null,
        user_id:null,
        comments:null
    }

    componentDidMount(){
        const {id} = this.props.match.params
        axios.get(`https://tvmovielistapi.herokuapp.com/show/${id}`)
        .then(response=>{
            const {title,img_url,genre_name,user_id} = response.data
            this.setState({title,img_url,genre_name,show_id:id,user_id})
        })
        
        axios.get(`https://tvmovielistapi.herokuapp.com/comment/${id}`)
        .then(response=>{
            console.log(response.data)
            this.setState({comments:response.data})
        })
    }

    render(){
        const {title,img_url,genre_name,show_id,user_id} = this.state
        return <>
        <div class='container mt-5'>
        <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={img_url} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{genre_name}</p>
            </div>
        </div>
        <ShowComments comments={this.state.comments}/>
        <Commentform show_id={show_id} user_id={user_id} />
        </div>
        </>
    }
}

export default Show