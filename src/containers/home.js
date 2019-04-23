import React from 'react'
import UserContext from '../contexts/userContext'
const Home = props =>{
    return <>
        <div class='container mt-5'>
        <div class="jumbotron">
            <h1 class="display-4">Welcome to the TV Show Watchlist App!</h1>
        </div>
       
        <UserContext.Consumer>
            {
                state =>{
                    console.log(state)
                    if(state.users && !state.selectedUser){
                        return <>
                         <h1 class="display-6">Select user to login</h1>
                        {state.users.map(user=>{
                             return <button type="button" class="btn btn-light" style={{marginRight:'2%'}} onClick={e=>{state.changeSelectedUserState(user.username,user.id)}}>{user.username}</button>
                        })}
                        </>
                    }
                }
            }
        </UserContext.Consumer > 
        </div>
    </>
}

export default Home