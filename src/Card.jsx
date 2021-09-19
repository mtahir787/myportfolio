import React from "react";

const Card = (props) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          display: "inline-block",
          margin: " 30px auto",
        }}
      >
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text">{props.desc}</p>
        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul> */}
        <div className="card-body">
          <a href={props.gitlink} className="card-link" target="_blank">
            Git Hub Link
          </a>
          <a href={props.livedemolink} className="card-link" target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
