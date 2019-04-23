import React from 'react'
import {withRouter} from 'react-router-dom'

const ShowComments = props =>{
    const {comments} = props
    if(comments){
        return <><h1 class="display-4">Comments</h1>
        <div class="card-group row">
            {comments.map(comment=>{
                    return <>
                    <div class='col-12'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{comment.comment_body}</h5>
                        </div>
                    </div>
                    </div>
                    </>
                })}
        </div></>
    }
    else return ''
    
}

export default withRouter(ShowComments)