import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/userContext'


export default (props) => {
    const {logout} = props
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">TvShowApp</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          
          <UserContext.Consumer>
            {
              state => {
                if (state.selectedUser) return <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/shows">Tv Shows</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/user/post">Create</Link>
                    </li>
                    <li className="nav-item">
                        <h6>Welcome back {state.selectedUser} !</h6>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/" onClick={e=>{logout()}}>Logout</Link>
                    </li>
                </>
              }
            }
          </UserContext.Consumer>
        </ul>
      </nav>
    )
  }

  