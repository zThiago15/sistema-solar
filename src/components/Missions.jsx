import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="BoardMissions">
          {missions.map((mission) => {
            const { name, year, country, destination } = mission;
            return (<MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />);
          })}
        </div>
      </div>
    );
  }
}

export default Missions;
