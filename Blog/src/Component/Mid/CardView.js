import React from 'react'
import { useSelector } from 'react-redux';

const CardView = ({ title, content }) => {


    return (
        <div className="card" style={{ width: "18rem" }} >
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" class="float-left btn btn-primary">View</a>
                <a href="#" class="float-right btn btn-primary">Edit</a>
            </div>
        </div>
    )
}

export default CardView;
