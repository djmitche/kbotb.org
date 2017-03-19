import React from 'react';
import moment from 'moment';
import { entryCost, entryDueDate } from './constants';

const Container = props => (
  <div className="page">
    <div id="primary">
      <div id="content">
        {props.body}
      </div>
      <div id="footer">
        <p className="text-muted text-center">Find this and other contests at <a href="http://homebrewcompetitions.com">HomeBrewCompetitions.com</a> or <a href="http://www.bjcp.org/apps/comp_schedule/competition_schedule.php">BJCP Comp Schedule</a>.</p>
      </div>
    </div>
    <div id="sidebar">
      <div id="contest-info">
        <p>Get your homebrew evaluated by BJCP certified judges</p>
        <p>Entry deadline: {moment().isAfter(entryDueDate) ? <em>Entries Closed</em> : entryDueDate.format('MMMM Do, YYYY')}.</p>
        <p>Cost: {entryCost} per entry <br />
          <span style={{ fontSize: '70%' }}>(two 12oz bottles)</span></p>
        <p>Prizes, raffle, and camraderie!</p>
      </div>
      <div id="juding-info">
        <p>Judging:</p>
        <p>Park Manor Hotel<br />
          <span style={{ fontWeight: 'normal' }}>
          7 Northside Drive<br />
          Clifton Park, NY 12065
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default Container;
