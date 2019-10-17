import React from "react";
const Stats = props => {
  let playerStat = props.playerStat;
  let batting = playerStat.data.batting;
  let bowling = playerStat.data.bowling;
  console.log(bowling);

  return (
    <React.Fragment>
      <div className="row m-3">
        <div className="col-xl-12 header">
          <div className="row">
            <div className="col-3">
              <img
                src={playerStat.imageURL}
                alt=""
                className="crickPhoto my-1"
              />
            </div>
            <div className="col-8 pt-5">
              <p className="MainHeading">{playerStat.fullName}</p>
              <p className="SecondaryHeading">{playerStat.country}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 trans">
        <div className="col-12">
          <div className="card Pcard">
            <div className="card-body p-2">
              <h5 className="card-title text-center text-muted">
                Personal Information
              </h5>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <span className="font-weight-bolder">Born</span>{" "}
                  {playerStat.born}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <span className="font-weight-bolder">Role</span>{" "}
                  {playerStat.playingRole}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <span className="font-weight-bolder">Age</span>{" "}
                  {playerStat.currentAge}
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <span className="font-weight-bolder">Teams</span>{" "}
                  {playerStat.majorTeams}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 mt-4 trans">
        <div className="col-12">
          <div className="card Pcard">
            <div className="card-body p-2">
              <h5 className="card-title text-center text-muted">
                More Information
              </h5>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <p>{playerStat.profile}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 mt-4 trans">
        <div className="col-12">
          <div className="card Pcard">
            <div className="card-body p-2">
              <h5 className="card-title text-center text-muted">
                Batting Summary
              </h5>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" />
                        <th scope="col">Mat</th>
                        <th scope="col">Inns</th>
                        <th scope="col">NO</th>
                        <th scope="col">Runs</th>
                        <th scope="col">HS</th>
                        <th scope="col">Ave</th>
                        <th scope="col">BF</th>
                        <th scope="col">SR</th>
                        <th scope="col">4s</th>
                        <th scope="col">6s</th>
                        <th scope="col">50</th>
                        <th scope="col">100</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">T-20</th>
                        <td>{batting.T20Is.Mat}</td>
                        <td>{batting.T20Is.Inns}</td>
                        <td>{batting.T20Is.NO}</td>
                        <td>{batting.T20Is.Runs}</td>
                        <td>{batting.T20Is.HS}</td>
                        <td>{batting.T20Is.Ave}</td>
                        <td>{batting.T20Is.BF}</td>
                        <td>{batting.T20Is.SR}</td>
                        <td>{batting.T20Is["4s"]}</td>
                        <td>{batting.T20Is["6s"]}</td>
                        <td>{batting.T20Is[50]}</td>
                        <td>{batting.T20Is[100]}</td>
                      </tr>
                      <tr>
                        <th scope="row">ODI</th>
                        <td>{batting.ODIs.Mat}</td>
                        <td>{batting.ODIs.Inns}</td>
                        <td>{batting.ODIs.NO}</td>
                        <td>{batting.ODIs.Runs}</td>
                        <td>{batting.ODIs.HS}</td>
                        <td>{batting.ODIs.Ave}</td>
                        <td>{batting.ODIs.BF}</td>
                        <td>{batting.ODIs.SR}</td>
                        <td>{batting.ODIs["4s"]}</td>
                        <td>{batting.ODIs["6s"]}</td>
                        <td>{batting.ODIs[50]}</td>
                        <td>{batting.ODIs[100]}</td>
                      </tr>
                      <tr>
                        <th scope="row">TEST</th>
                        <td>{batting.tests.Mat}</td>
                        <td>{batting.tests.Inns}</td>
                        <td>{batting.tests.NO}</td>
                        <td>{batting.tests.Runs}</td>
                        <td>{batting.tests.HS}</td>
                        <td>{batting.tests.Ave}</td>
                        <td>{batting.tests.BF}</td>
                        <td>{batting.tests.SR}</td>
                        <td>{batting.tests["4s"]}</td>
                        <td>{batting.tests["6s"]}</td>
                        <td>{batting.tests[50]}</td>
                        <td>{batting.tests[100]}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 mt-4 mb-5 trans">
        <div className="col-12">
          <div className="card Pcard">
            <div className="card-body p-2">
              <h5 className="card-title text-center text-muted">
                Bowling Summary
              </h5>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" />
                        <th scope="col">Mat</th>
                        <th scope="col">Inns</th>
                        <th scope="col">Balls</th>
                        <th scope="col">Wkts</th>
                        <th scope="col">BBI</th>
                        <th scope="col">BBM</th>
                        <th scope="col">Ave</th>
                        <th scope="col">Econ</th>
                        <th scope="col">SR</th>
                        <th scope="col">4w</th>
                        <th scope="col">5w</th>
                        <th scope="col">10</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">T-20</th>
                        <td>{bowling.T20Is.Mat}</td>
                        <td>{bowling.T20Is.Inns}</td>
                        <td>{bowling.T20Is.Balls}</td>
                        <td>{bowling.T20Is.Wkts}</td>
                        <td>{bowling.T20Is.BBI}</td>
                        <td>{bowling.T20Is.BBM}</td>
                        <td>{bowling.T20Is.Ave}</td>
                        <td>{bowling.T20Is.Econ}</td>
                        <td>{bowling.T20Is.SR}</td>
                        <td>{bowling.T20Is["4w"]}</td>
                        <td>{bowling.T20Is["5w"]}</td>
                        <td>{bowling.T20Is[10]}</td>
                      </tr>
                      <tr>
                        <th scope="row">ODI</th>
                        <td>{bowling.ODIs.Mat}</td>
                        <td>{bowling.ODIs.Inns}</td>
                        <td>{bowling.ODIs.Balls}</td>
                        <td>{bowling.ODIs.Wkts}</td>
                        <td>{bowling.ODIs.BBI}</td>
                        <td>{bowling.ODIs.BBM}</td>
                        <td>{bowling.ODIs.Ave}</td>
                        <td>{bowling.ODIs.Econ}</td>
                        <td>{bowling.ODIs.SR}</td>
                        <td>{bowling.ODIs["4w"]}</td>
                        <td>{bowling.ODIs["5w"]}</td>
                        <td>{bowling.ODIs[10]}</td>
                      </tr>
                      <tr>
                        <th scope="row">TEST</th>
                        <td>{bowling.tests.Mat}</td>
                        <td>{bowling.tests.Inns}</td>
                        <td>{bowling.tests.Balls}</td>
                        <td>{bowling.tests.Wkts}</td>
                        <td>{bowling.tests.BBI}</td>
                        <td>{bowling.tests.BBM}</td>
                        <td>{bowling.tests.Ave}</td>
                        <td>{bowling.tests.Econ}</td>
                        <td>{bowling.tests.SR}</td>
                        <td>{bowling.tests["4w"]}</td>
                        <td>{bowling.tests["5w"]}</td>
                        <td>{bowling.tests[10]}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stats;
