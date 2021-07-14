import React from 'react';


export default function ShowProduct(props){
    return(
        <div className="container">
            <h1>Post Detail</h1>
            <h3>{props.post.title}</h3>
            <small>{props.post.body}</small>
        </div>
    )
}