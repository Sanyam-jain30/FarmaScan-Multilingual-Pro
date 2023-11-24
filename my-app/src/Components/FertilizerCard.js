import React from "react";
import './FertilizerCard.css';
import {Link} from 'react-router-dom';

function FertilizerCard(props){
    return(
        <div className="card" style={{width: "20rem"}}>
            <img src={props.data.img} className="card-img-top" alt={props.data.fertilizer} />
            <div className="card-body">
                <h5 className="card-title">{props.data.fertilizer}</h5>
                <p className="card-text">{props.data.productName}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.data.rating} Likes</li>
                <li className="list-group-item">{props.data.price}</li>
            </ul>
            <div className="card-footer">
                <a href={props.data.url} className="link">Check out</a>
                <Link
                    to="/usermanual"
                    className="link"
                    state= {{
                        "name": props.data.fertilizer
                    }}
                >User Manual</Link>
            </div>
        </div>
    )
}

export default FertilizerCard;