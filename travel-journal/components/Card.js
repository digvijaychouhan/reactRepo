import React from "react"

export default function Card(props) {
    return (
        <div className="card">
         <img className="card-image" src={props.imageUrl} />

            <div className="container">
                <p> 
                    <span className="caps">{props.location}</span> 
                    <span className="gray"><a href={props.googleMapsUrl}>View in Google Maps</a></span>
                </p>
                <h1>{props.title}</h1>                
                <p className="bold">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>  
            </div>     
       </div>
    )
}