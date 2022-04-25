import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const {token} = useContext(AuthContext);
  
  
  // use token to chnage the text from Login to Logout once logged in successfully
 

  const Nav = styled.div`
     height:50px;
     width:100%;
     display:flex;
     justify-content:center;
     background:#fd9b95;
     font-size:20px;
     gap:30px;
     border-radius:5px; 
     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
  `
  const Button = styled.button`
   font-size:1rem;
   border:none;
   margin-top:15px;
   background:transparent;
  `

  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
        <Link to="/" ><Button> Home</Button></Link>
        <Link to="about"><Button>About</Button>  </Link>
        <Link to="books"><Button> Books</Button>  </Link>
        <Link to={token? "/logout":"/login" }> <Button>{token ? "Logout" :"Login"} </Button> </Link>
      </Nav>
    </>
  );
};


