import React from "react";
import imgg from "./img/img.png";
import sus from "./img/sus.jpg";

function App () {
  return (
    <>
    <div className="contin">
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="Enter CIty Name" />
          <button><img className="im" src={imgg} alt="" /></button>
          

        </div>
        <div className="lpic">
            <img className="inj" src={sus} alt="" />
            <p className=" status">STATUS</p>
            <h1 className="number">24°c</h1>
            <h2 className="jax">London</h2>

          </div>
      </div>

    </div>
    </>
  )
}
export default App