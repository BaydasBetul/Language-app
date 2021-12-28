import React, { useState } from "react";
import "./Cards.css";

const Cards = (props) => {
  const { name, img, options } = props;
  const [cardClick, setCardClick] = useState(true);
  return (
    <>
      <div key={name} className="card" onClick={() => setCardClick(!cardClick)}>
        {cardClick ? (
          <Frontcard name={name} img={img} />
        ) : (
          <Info options={options} />
        )}
      </div>
    </>
  );
};

export default Cards;

function Frontcard({ img, name }) {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  );
}

function Info({ options }) {
  return (
    <ul className="info">
      {options.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
