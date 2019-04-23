import React from 'react'
import {withRouter} from 'react-router-dom'

const ShowUsers = props =>{
    const {users} = props
    console.log('users',users)
    if(users){
        return <div class="card-group container">
        <div class='row'>
        {users.map(user=>{
            return <>
            <div class='col-4'>
            <div class="card" onClick={e=>props.history.push(`/user/${user.id}`)}>
                <div class="card-body">
                    <h5 class="card-title">{user.username}</h5>
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

export default withRouter(ShowUsers)