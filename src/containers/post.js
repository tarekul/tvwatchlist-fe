import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component{
    state={
        title:'',
        genre_id:0,
        img_url:'',
        error:false,
        success:false
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = () =>{
        const {title,img_url,genre_id} = this.state
        if(title === '' || img_url === '' || genre_id === 0){
            this.setState({error:true,success:false})
        }
        else{
            const {user_id} = this.props
            //console.log(user_id)
            this.setState({error:false},()=>{
                axios.post('https://tvmovielistapi.herokuapp.com/show',{
                    title:title,
                    img_url:img_url,
                    genre_id:genre_id,
                    user_id:user_id
                })
                .then(()=>{
                    this.setState({title:'',img_url:'',genre_id:0,success:true})
                })
            })
            
        }
    }

    render(){
        const {error,success} = this.state
        const displayError = error ? <div class="alert alert-danger" role="alert">Missing input</div> : ''
        const showSuccess = success ? <div class="alert alert-primary" role="alert">New Show post success!</div> : ''
        return <>
            {displayError}
            {showSuccess}
            <div class="container mt-5">
                <h4>Post a new show</h4>
                <label>Title</label>
                <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder='enter title ...' value={this.state.title} style={{width:'30%'}} name='title' onChange={e=>this.handleChange(e)} /> 
                <label>Genre</label>
                <select class="form-control" id="exampleFormControlSelect1" style={{width:'10%'}} name='genre_id' onChange={e=>this.handleChange(e)}>
                <option value='0'>Choose ...</option>
                <option value='1'>Adventure</option>
                <option value='2'>Drama</option>
                <option value='3'>Comedy</option>
                <option value='4'>Fantasy</option>
            </select>
                <label>Image URL</label>
                <input type="text" class="form-control" aria-label="Text input with dropdown button" value={this.state.img_url} name='img_url' placeholder='enter url ...' style={{width:'30%'}} onChange={e=>this.handleChange(e)} /> 
                <button type="button" class="btn btn-primary" style={{marginTop:'3%'}} onClick={e=>this.handleSubmit()}>submit</button>
            </div>

            
        </>
        
    }
}

export default Post