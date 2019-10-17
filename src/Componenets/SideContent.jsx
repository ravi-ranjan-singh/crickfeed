import React from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
import SResults from "./ScheduleRes";
const SideContent = props => {
  return (
    <React.Fragment>
      {props.isStatsClicked ? (
        <SearchForm onHandlePlayerFinder={props.onHandlePlayerFinder} />
      ) : (
        ""
      )}
      {props.isStatsClicked ? (
        <Results
          content={props.players}
          onHandlePlayerStats={props.onHandlePlayerStats}
        />
      ) : (
        false
      )}
      {props.isScheduleClicked ? <SResults content={props.schedules} /> : false}
    </React.Fragment>
  );
};

export default SideContent;
