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
  return <h1>List of College Basketball Teams</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
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
