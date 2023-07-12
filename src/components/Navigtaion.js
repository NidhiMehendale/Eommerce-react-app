import { Nav,NavLink } from "react-bootstrap";

const Navigation = () => {

    return (
        <Nav>
        <NavLink href="#home">HOME</NavLink>
        <NavLink href="#features">STORE</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </Nav>
    );
};

export default Navigation;