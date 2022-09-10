import React from "react";
import "./Gridtwo.css";
import Customer from "../customer/Customer";
import "../rightside/Rightside.css";

const GridTwo = () => {
  return (
  
      <div className="rightside">
        <div className="login">
          <form action="">
            <h2>CHANGE LOGIN</h2>

            <figure>
              <label htmlFor="USERNAME">Username</label>
              <input type="text" />
            </figure>
            <figure>
              <label htmlFor="password">Current password</label>
              <input type="password" />
            </figure>
            <figure>
              <label htmlFor="password">New password</label>
              <input type="password" />
            </figure>
            <figure>
              <label htmlFor="password">Re -type password</label>
              <input type="password" />
            </figure>

            <button type="submit">Update Profile</button>
          </form>
        </div>
        <Customer />
      </div>
     
    
  );
};

export default GridTwo;
