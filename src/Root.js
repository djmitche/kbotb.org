import React from 'react';
import { Link } from 'react-router';

export const RootHeader = () => (
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
);

const resultsUrl = 'http://www.reggiebeer.com/?Web=1000173';

const ResultsRow = () => (
  <div className="row">
    <div className="col-sm-1 col-xs-hidden" />
    <div className="col-sm-10 col-xs-12" style={{ textAlign: 'center' }}>
      <h3>Contest Results</h3>
      Contest medal results are <a href={resultsUrl}>now available</a>!<br />
      Scoresheets are being scanned and will be available online soon.
    </div>
    <div className="col-sm-1 col-xs-hidden" />
  </div>
);

export const Root = () => (
  <div>
    {resultsUrl && <ResultsRow />}
    <div className="row">
      <div className="col-md-1 col-xs-hidden"></div>
      <div className="col-md-4 col-xs-12">
        <h3>Judging</h3>
        <em>November 12, 2016</em><br />
        The C. H. Evans Brewing company at<br />
        The Albany Pump Station<br />
        19 Quackenbush Square, Albany, NY 12207<br />
        <em>Prizes, raffle, camraderie!</em><br />
        <Link to="/judging-details">More Details</Link>
      </div>
      <div className="col-md-3 col-xs-12">
        <h3>Sponsors</h3>

        KBOTB is generously sponsored by <Link to="/sponsors">local
          homebrew shops and vendors</Link>.  Please give them your
        business and say "thanks" for supporting the homebrewing
        community!

      </div>
      <div className="col-sm-4 col-xs-12">
        <h3>Entry Information</h3>
        <em>Entry Deadline:</em> October 22, 2016<br/>
        <em>BJCP Guidelines:</em> <b>New (2015)</b><br/>
        <em>Cost:</em> $8 per entry<br/>
        <Link to="/entry-details">More Details</Link>
      </div>
    </div>
  </div>
);
