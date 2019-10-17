import React from "react";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <div className="row">
      <div className="col-4">
        <h1 className="text-center mt-5">
          <Link to="/" className="link">
            <i
              className="fas fa-home"
              onClick={() => {
                props.onAllFalse();
              }}
            />
          </Link>
        </h1>
        <div className="text-center">Home</div>
      </div>
      <div className="col-4">
        <h1 className="text-center mt-5">
          <i
            className="fas fa-calendar-week"
            onClick={() => {
              props.onScheduleTrue();
              props.onhandleSchedule();
            }}
          />
        </h1>
        <div className="text-center">Schedule</div>
      </div>
      <div className="col-4">
        <h1 className="text-center mt-5">
          <i className="fas fa-chart-line" onClick={props.onStatsTrue} />
        </h1>
        <div className="text-center">Stats</div>
      </div>
    </div>
  );
};

export default Navbar;
