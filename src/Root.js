import React from 'react';
import { Link } from 'react-router';

const resultsUrl = null; // = 'http://www.reggiebeer.com/?Web=1000173';

const ResultsItem = () => (
  <div className="row">
    <div className="col-sm-1 col-xs-hidden" />
    <div className="col-sm-10 col-xs-12" style={{ textAlign: 'center' }}>
      <h3>Contest Results</h3>
      Contest medal results are <a href={resultsUrl}>now available</a>!
    </div>
    <div className="col-sm-1 col-xs-hidden" />
  </div>
);

export const Root = () => (
  <div className="root">
    <img className="centered-logo" src="img/kbotb-480.png" />
    <h1>21st Annual Homebrew Contest</h1>
    <h2>Saturday, October 21, 2017</h2>
    <p><em>Want more bragging rights for your homebrew??</em></p>
    <p>What if you could tell your friends that your homebrew is "Award
    Winning"? Here is your opportunity to get your brew evaluated by
    BJCP certified judges.  Not only might you take home a prize, but
    all entries receive valuable written feedback from judges to help
    you improve your homebrew.</p>

    <div id="page-menu">
      {resultsUrl && <div className="menu-item"><ResultsItem /></div>}
      <div className="menu-item">
        <h3>Judging</h3>
        <em>October 21, 2017</em><br />
        Park Manor Hotel (<b>NEW</b>)<br />
        <Link to="/judging-details">More Details</Link>
      </div>
      <div className="menu-item">
        <h3>Sponsors</h3>
        Please thank our sponsors!<br />
        <Link to="/sponsors">More Details</Link>
      </div>
      <div className="menu-item">
        <h3>Entries</h3>
        <em>Entry Deadline:</em> September 29, 2017<br/>
        <em>BJCP Guidelines:</em> 2015 BJCP<br/>
        <em>Cost:</em> $8 per entry<br/>
        <Link to="/entry-details">More Details</Link>
      </div>
    </div>
  </div>
);
