import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="row">
    <div className="hidden-xs hidden-sm col-md-3">
      <Link to="/">
        <img src="img/kbotb-400.png" width="240"/>
      </Link>
    </div>
    <div className="col-xs-12 col-md-9 text-center">
      <h2>The 20th Annual</h2>
      <h1>Knickerbocker Battle of the Brews</h1>
    </div>
  </div>
);

const Container = props => (
  <div className="container-fluid">
    {props.header ? props.header : <Header />}
    {props.body}
    <div className="container">
      <p className="text-center">—</p>
      <p className="text-muted text-center">Find this and other contests at <a href="http://homebrewcompetitions.com">HomeBrewCompetitions.com</a> or <a href="http://www.bjcp.org/apps/comp_schedule/competition_schedule.php">BJCP Comp Schedule</a>.
      </p>
    </div>
  </div>
);

export default Container;
