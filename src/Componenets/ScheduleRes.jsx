import React from "react";
import { Link } from "react-router-dom";
const SResults = props => {
  let j = props.number || 3;
  let markup;
  if (props.content) {
    markup = props.content.map((val, i) => {
      if (i < j) {
        return (
          <div className="row mt-3" key={val.unique_id}>
            <div className="col-12">
              <div className="card">
                <div className="card-body p-2">
                  {val.name}
                  <p className="text-muted">{val.date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  } else markup = "";
  return (
    <React.Fragment>
      <div className="row mt-2">
        <div className="col-12 text-center">
          <h1>{props.heading || ""}</h1>
        </div>
      </div>
      {markup}
      <div className="row mt-2 justify-content-center">
        {props.noBtn ? (
          ""
        ) : (
          <div className="col-12">
            <Link
              className="btn btn-light text-danger font-weight-bolder"
              to="/schedule"
            >
              Show More
            </Link>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default SResults;
