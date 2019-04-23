import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Commentform extends Component{
    state = {
        comment:null,
        showComment:false,
        comment_list:[]
    }
    handleChange = (e) => {
        //console.log(e.target.name,e.target.value)
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = () =>{
        const {comment,comment_list} = this.state
        if(comment){
            comment_list.push(comment)
            const {show_id,user_id} = this.props
            this.setState({showComment:true,comment_list})
            axios.post(`https://tvmovielistapi.herokuapp.com/comment`,{
                user_id:user_id,
                show_id:show_id,
                comment_body:comment
            })
        }
    }

    showComments = () =>{
        const {showComment,comment_list} = this.state
        if(showComment){
            return comment_list.map(com=>{
                return <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{com}</h5>
                </div>
            </div>
            })
        }
    }

    render(){
        return <>
        {this.showComments()}
        <h1 class="display-5">Add new comment</h1>
        <div class="input-group">
            <textarea class="form-control" aria-label="With textarea" placeholder='new comment...' name='comment' onChange={e=>this.handleChange(e)}></textarea>
        </div>
        <button type="button" class="btn btn-primary" onClick={e=>this.handleSubmit()}>Submit Comment</button>
    </>
    }
    
    
}

export default withRouter(Commentform)