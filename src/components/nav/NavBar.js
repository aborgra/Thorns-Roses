import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default props => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          Thorns and Roses
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/nurseries">
          Nurseries
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/distributors">
          Distributors
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/retailers">
          Retailers
        </Link>
      </li>
     

{/* {
    localStorage.getItem("kennel_customer")
        ? <li className="navbar__item">
            <Link className="navbar__link"
                to=""
                onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem("kennel_customer")
                    props.history.push("/")
                }}
            >Logout</Link>
        </li>
        : ""
} */}
      
    </ul>
  );
};
