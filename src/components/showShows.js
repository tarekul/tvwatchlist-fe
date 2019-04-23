import React from 'react'
import {withRouter} from 'react-router-dom'

const ShowShows = (props) =>{
    const {shows} = props
    if(shows){
        return <div class="card-group container mt-5">
        <div class='row'>
        {shows.map(show=>{
            return <>
            <div class='col-6'>
            <div class="card" onClick={e=>props.history.push(`/show/${show.id}`)}>
                <img class="card-img-top" src={show.img_url} alt="Card image cap" />   
                <div class="card-body">
                    <h5 class="card-title">{show.title}</h5>
                    <p class="card-text">{show.genre_name}</p>
                </div>
            </div>
            </div>
            </>
        })}
        </div>
    </div>
    }
    else return ''
    
}

export default withRouter(ShowShows)