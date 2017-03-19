import React from 'react';
import { Link } from 'react-router';
import { resultsUrl, entryCost, entryDueDate, contestDate, locationName } from './constants';

export const Root = () => (
  <div className="root">
    <img className="centered-logo" src="img/kbotb-480.png" />
    <h1>21st Annual Homebrew Contest</h1>
    <h2>{contestDate.format('dddd, MMMM Do, YYYY')}</h2>
    <p><em>Want more bragging rights for your homebrew??</em></p>
    <p>What if you could tell your friends that your homebrew is "Award
    Winning"? Here is your opportunity to get your brew evaluated by
    BJCP certified judges.  Not only might you take home a prize, but
    all entries receive valuable written feedback from judges to help
    you improve your homebrew.</p>

    <div id="page-menu">
      {resultsUrl && <div className="menu-item">
        <h3>Results</h3>
        Contest medal results are <a href={resultsUrl}>now available!</a>!
      </div>}
      <div className="menu-item">
        <h3>Judging</h3>
        <em>{contestDate.format('dddd, MMMM Do, YYYY')}</em><br />
        {locationName} (<b>NEW</b>)<br />
        <Link to="/judging-details">More Details</Link>
      </div>
      <div className="menu-item">
        <h3>Sponsors</h3>
        Please thank our sponsors!<br />
        <Link to="/sponsors">More Details</Link>
      </div>
      <div className="menu-item">
        <h3>Entries</h3>
        <em>Entry Deadline:</em> {entryDueDate.format('MMMM Do, YYYY')}<br/>
        <em>BJCP Guidelines:</em> 2015 BJCP<br/>
        <em>Cost:</em> {entryCost} per entry<br/>
        <Link to="/entry-details">More Details</Link>
      </div>
    </div>
  </div>
);
