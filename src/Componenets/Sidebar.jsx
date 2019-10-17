import React, { Component } from "react";
import Navbar from "./Navbar";
import SideContent from "./SideContent";
class Sidebar extends Component {
  state = {
    isStatsClicked: false,
    isScheduleClicked: false
  };
  async setStatsTrue() {
    await this.setState({
      isStatsClicked: true,
      isScheduleClicked: false
    });
  }
  async setScheduleTrue() {
    await this.setState({
      isStatsClicked: false,
      isScheduleClicked: true
    });
  }
  async setAllFalse() {
    await this.setState({
      isStatsClicked: false,
      isScheduleClicked: false
    });
  }
  render() {
    return (
      <div className="col-xl-3 sidebar fixed-top">
        <div className="row">
          <div className="col-12 heading">CrickFeed</div>
        </div>
        <Navbar
          onStatsTrue={this.setStatsTrue.bind(this)}
          onScheduleTrue={this.setScheduleTrue.bind(this)}
          onAllFalse={this.setAllFalse.bind(this)}
          onhandleSchedule={this.props.onhandleSchedule}
          handleLiveMatches={this.props.onhandleLiveMatches}
        />
        <SideContent
          isStatsClicked={this.state.isStatsClicked}
          isScheduleClicked={this.state.isScheduleClicked}
          onHandlePlayerFinder={this.props.onHandlePlayerFinder}
          players={this.props.players}
          onHandlePlayerStats={this.props.onHandlePlayerStats}
          schedules={this.props.schedules}
        />
      </div>
    );
  }
}

export default Sidebar;
