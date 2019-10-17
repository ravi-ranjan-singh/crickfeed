import React from "react";
import Card from "./Card";
const Live = props => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-3">Live Matches</h1>
        </div>
      </div>
      <div className="row mt-4">
        {props.liveMatches.length > 0
          ? props.liveMatches.map(cur => (
              <div className="col-4 p-4 mr-0">
                <Card match={cur} />
              </div>
            ))
          : ""}
      </div>
    </React.Fragment>
  );
};

export default Live;
