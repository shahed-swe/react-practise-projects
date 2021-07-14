import React from 'react';


function ShowProduct(props){
    if (props.post == null){
        return <div>No Post</div>;
    }
    return(
        <div className="container">
            <h1>Post Detail</h1>
            <h3>{props.post.title}</h3>
            <small>{props.post.body}</small>
        </div>
    )
}


export default ShowProduct;