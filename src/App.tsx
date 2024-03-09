import React from 'react';
import './App.css';
import teamsObject from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <div>
      <h1>List of College Basketball Teams</h1>
      <br />
      <h3>
        This is a website that lists out information about all the colleges in
        NCAA Basketball.
      </h3>
      <br></br>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h3>Mascot Name: {oneTeam.name}</h3>
        <h3>Location: {oneTeam.city + ', ' + oneTeam.state}</h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsObject.teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
