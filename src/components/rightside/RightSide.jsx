import React from "react";
import Updates from "../updates/Updates";
import "./Rightside.css";
// import Updates from '../updates/Updates'

const RightSide = () => {
  return (
    <div className="rightside">
      <div>
        <form action="">
          <h2>Update Company Information</h2>
          <div className="form__control">
            <figure>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </figure>
            <figure>
              <label htmlFor="email">E-mail</label>
              <input type="email" />
            </figure>
          </div>
          <div className="form__control">
            <figure>
              <label htmlFor="address">Address</label>
              <input type="text" />
            </figure>
            <figure>
              <label htmlFor="phone">Phone</label>
              <input type="tel" />
            </figure>
          </div>

          <figure>
            <label htmlFor="Bitcoin">Bitcoin</label>
            <input type="text" />
          </figure>
          <figure>
            <label htmlFor="Ethereum">Ethereum</label>
            <input type="text" />
          </figure>

          <div className="form__control">
            <figure>
              <label htmlFor="minimum">Minimum Withdrawal</label>
              <input type="text" />
            </figure>
            <figure>
              <label htmlFor="minimum">Minimum Withdrawal</label>
              <input type="text" />
            </figure>
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <div>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;
