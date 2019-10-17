import React from "react";

const Card = props => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {props.match["team-1"]} vs {props.match["team-2"]}
          </h5>
          <p className="card-text">{props.match.score}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
