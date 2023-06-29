import React from "react";
import { Button } from "react-bootstrap";

const HeaderCartButton = (props) => {
  return (
    <Button variant="outline-info" onClick={props.onClick}>
      <span>Cart</span>
      <span>0</span>
    </Button> 
  );
};

export default HeaderCartButton;