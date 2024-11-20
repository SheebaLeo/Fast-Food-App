import React from "react";

const Card = ({title, image, description, price, buttonAction}) => {
  return (
    
    <div className={`card`} style={{width:'350px'}}>
      <div className="card-header">
        <img src={image} className="card-img-top" title={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">SEK {price}</p> 
      </div>
      <div style={{paddingLeft:'15px'}}>
        <button className="btn btn-dark me-auto" onClick={buttonAction}>Add to order</button>
      </div>
    </div>
  );
};

export default Card;