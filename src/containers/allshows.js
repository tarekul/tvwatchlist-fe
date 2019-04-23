import React,{Component} from 'react'
import axios from 'axios'

class Allshows extends Component{
    state={
        allshows:null,
        imgs:[]
    }
    componentDidMount(){
        const allshows = {}
        const {imgs} = this.state
        axios.get('https://tvmovielistapi.herokuapp.com/show')
        .then(response=>{
            response.data.forEach(show=>{
                const {title,username,img_url,user_id} = show
                if(allshows[title]){
                    allshows[title].push({username,user_id})
                }
                else{
                    allshows[title] = []
                    allshows[title].push({username,user_id})
                    imgs.push(img_url)
                }
            })
            this.setState({allshows:allshows})
        })
        
    }

    displayAllShows = () =>{
        const {allshows,imgs} = this.state
        if(allshows){
            //console.log(Object.keys(allshows))
            const showArr = Object.keys(allshows);
            return <div class="card-group container mt-5">
            <div class='row'>
            {
                showArr.map((title,i)=>{
                    //console.log(typeof allshows[title])
                    //console.log(allshows[title].join(', '))
                    return <>
                    <div class="card col-4">
                        <img class="card-img-top" src={imgs[i]} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">Who's Watching?</p>
                            {allshows[title].map(user=>{
                                return <p class="card-text" onClick={e=>{this.props.history.push(`/user/${user.user_id}`)}}>{user.username}</p>
                            })}
                            
                        </div>
                    </div>
                    </>
                })
            }
            </div>
            </div>
        }
        else return ''
    }
    
    render(){
        return <>{this.displayAllShows()}</>
    }
}

export default Allshows