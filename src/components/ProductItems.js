import React from "react";

const ProductItems = (props) => {

    return (
        <li >
        <div>
          <h3>{props.title}</h3>
          <div>
            <img src={props.imageUrl} alt={props.title} />
          </div>
          <div>{props.price}</div>
        </div>
        <div>
        </div>
        </li>

    );
   

};

export default ProductItems;