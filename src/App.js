import React, { Component } from "react";
import Sidebar from "./Componenets/Sidebar";
import Main from "./Componenets/Main";

class App extends Component {
  state = {
    players: [],
    playerStat: {
      data: {
        batting: {
          T20Is: {},
          ODIs: {},
          tests: {}
        },
        bowling: {
          T20Is: {},
          ODIs: {},
          tests: {}
        }
      }
    },
    schedules: [],
    liveMatches: []
  };

  async componentDidMount() {
    let response = await fetch(
      `https://cricapi.com/api/matches?apikey=GH5IwdhhOtbAT67134nr8u0mrtr1`
    );
    let result = await response.json();
    let matches = { ...result.matches };
    let liveMatches = [];
    let j = 0;
    for (let i in matches) {
      if (j < 6 && matches[i].matchStarted) {
        liveMatches.push(matches[i]);
      }
    }
    let newLiveMatches = [];
    for (let i = 0; i < liveMatches.length; i++) {
      let response = await fetch(
        `  https://cricapi.com/api/cricketScore?apikey=GH5IwdhhOtbAT67134nr8u0mrtr1&unique_id=${
          liveMatches[i].unique_id
        }`
      );
      let result = await response.json();
      let matche = result;
      newLiveMatches.push(matche);
    }
    this.setState({
      liveMatches: newLiveMatches
    });
  }

  async handlePlayerFinder(playerName) {
    let response = await fetch(
      `https://cricapi.com/api/playerFinder?apikey=GH5IwdhhOtbAT67134nr8u0mrtr1&name=${playerName}`
    );
    let result = await response.json();
    let players = [...result.data];
    this.setState({
      players
    });
  }

  async handlePlayerStats(pid) {
    let response = await fetch(
      `https://cricapi.com/api/playerStats?apikey=GH5IwdhhOtbAT67134nr8u0mrtr1&pid=${pid}`
    );
    let result = await response.json();
    let playerStat = { ...result };
    this.setState({
      playerStat,
      players: []
    });
  }
  async handleSchedule() {
    let response = await fetch(
      `https://cricapi.com/api/matchCalendar?apikey=GH5IwdhhOtbAT67134nr8u0mrtr1`
    );
    let result = await response.json();
    let schedules = [...result.data];
    this.setState({
      schedules
    });
  }

  render() {
    return (
      <div className="row">
        <Sidebar
          onHandlePlayerFinder={this.handlePlayerFinder.bind(this)}
          onHandlePlayerStats={this.handlePlayerStats.bind(this)}
          players={this.state.players}
          schedules={this.state.schedules}
          onhandleSchedule={this.handleSchedule.bind(this)}
        />
        <Main
          schedules={this.state.schedules}
          playerStat={this.state.playerStat}
          liveMatches={this.state.liveMatches}
        />
      </div>
    );
  }
}

export default App;
