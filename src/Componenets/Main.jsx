import React from "react";
import Live from "./Live";
import Stats from "./Stats";
import { Route } from "react-router-dom";
import SResults from "./ScheduleRes";
const Main = props => {
  console.log(props);

  return (
    <div className="col-xl-9 main-content ml-auto">
      <Route
        path="/"
        render={rprops => <Live {...rprops} liveMatches={props.liveMatches} />}
        exact
      />
      <Route
        path="/stats"
        render={rprops => <Stats {...rprops} playerStat={props.playerStat} />}
        exact
      />
      <Route
        path="/schedule"
        render={rprops => (
          <SResults
            {...rprops}
            number={props.schedules.length}
            content={props.schedules}
            noBtn={true}
            heading={"Schedule"}
            exact
          />
        )}
        exact
      />
    </div>
  );
};

export default Main;
