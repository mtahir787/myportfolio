import React from "react";

const Card = () => {
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
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link" target="_blank">
            Card link
          </a>
          <a href="#" className="card-link" target="_blank">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
