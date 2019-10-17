import React from "react";
import { Link } from "react-router-dom";
const Results = props => {
  let markup;
  if (props.content) {
    markup = props.content.map((val, i) => {
      if (i <= 3) {
        return (
          <div className="row mt-5" key={val.pid}>
            <div className="col-12">
              <Link to="/stats">
                <div
                  className="card"
                  onClick={() => {
                    props.onHandlePlayerStats(val.pid);
                  }}
                >
                  <div className="card-body p-2">{val.fullName}</div>
                </div>
              </Link>
            </div>
          </div>
        );
      }
    });
  } else markup = "";
  return markup;
};

export default Results;
