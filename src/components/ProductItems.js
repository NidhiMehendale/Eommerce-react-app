import React from "react";

const ProductItems = (props) => {

    return (
        <li >
        <div>
          <h3>{props.title}</h3>
          <div>{props.price}</div>
          <div>{props.imageUrl}</div>
        </div>
        <div>
        </div>
        </li>

    );
   

};

export default ProductItems;