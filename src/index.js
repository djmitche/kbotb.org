import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="hidden-xs hidden-sm col-md-3 text-center"><img src="img/abc_logo.png" /></div>
      <div className="col-xs-12 col-sm-12 col-md-6 text-center">
        <h3>The Saratoga Thoroughbrews and Albany Brew Crafters present</h3>
        <h2>The 20th Annual</h2>
        <center>
          <img src="img/kbotb-400.png" className="img-responsive" />
        </center>
      </div>
      <div className="hidden-xs hidden-sm col-md-3 text-center"><img src="img/thoroughbrews_logo.png" /></div>
    </div>
    <div className="row">
      <div className="col-md-1 col-xs-hidden"></div>
      <div className="col-md-4 col-xs-12">
        <h3>Judging</h3>
        <em>November 12, 2016</em><br />
        The C. H. Evans Brewing company at<br />
        The Albany Pump Station<br />
        19 Quackenbush Square, Albany, NY 12207<br />
        <em>Prizes, raffle, camraderie!</em><br />
        <a href="judging_details.html">More Details</a>
      </div>
      <div className="col-md-3 col-xs-12">
        <h3>Sponsors</h3>

        KBOTB is generously sponsored by <a href="sponsors.html">local
          homebrew shops and vendors</a>.  Please give them your
        business and say "thanks" for supporting the homebrewing
        community!

      </div>
      <div className="col-sm-4 col-xs-12">
        <h3>Entry Information</h3>
        <em>Entry Deadline:</em> October 22, 2016<br/>
        <em>BJCP Guidelines:</em> <b>New (2015)</b><br/>
        <em>Cost:</em> $8 per entry<br/>
        <a href="entry_details.html">More Details</a>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <p className="text-muted text-center">Find this and other contests at <a href="http://homebrewcompetitions.com">HomeBrewCompetitions.com</a> or <a href="http://www.bjcp.org/apps/comp_schedule/competition_schedule.php">BJCP Comp Schedule</a>.
        </p>
      </div>
    </footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
