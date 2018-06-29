import React from "react";

export const savedCard = props => 

<div className="row search-saved">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title"> {props.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.date}</h6>
        <p>{props.snippet}</p>
        <a href={props.url} target="_blank">View Article</a>
        <button type="button" className="btn btn-outline-warning float-right" {...props}>Remove</button>
    </div> 
  </div>
</div>
