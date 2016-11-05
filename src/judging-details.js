import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="hidden-xs hidden-sm col-md-3">
        <img src="img/kbotb-400.png" width="240" />
      </div>
      <div className="col-xs-12 col-md-9">
        <h3>The Saratoga Thoroughbrews and Albany Brew Crafters present</h3>
        <h2>The 20th Annual</h2>
        <h1>Knickerbocker Battle of the Brews</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-3"></div>
      <div className="col-xs-6 alert alert-info text-center">

        To register to judge or steward in the Knickerbocker Battle of the
        Brews, use the competition site:<br/>

        <a className="btn btn-default" href="http://reggiebeer.com/ReggieEntry.php?CompetitionID=ZEUFQP1000173">Register</a>
        <br/>
        <em>Note:</em> Judge registration opens August 1, 2016
        <br/>
        <small>Trouble using Reggie?  Email the <a href="email:shadowfax1216@gmail.com">judge coordinator</a>.</small>
        </div>
      <div className="col-xs-3"></div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h3>Competition Officials</h3>
        <ul>
          <li>Organizers - <a href="email:djmitche@gmail.com">Dustin J.
          Mitchell</a> (djmitche@gmail.com) and <a
          href="email:shadowfax1216@gmail.com">Dan Brown</a> (shadowfax1216@gmail.com)
          - for all questions</li>

          <li>Judge Coordinator - <a href="email:gregskegs@yahoo.com">Greg
          Mobley</a> (gregskegs@yahoo.com) - for questions about judging or
          stewarding</li>

          <li>Registrar - <a href="email:djmitche@gmail.com">Dustin J.
          Mitchell</a> - for questions about entries</li>
        </ul>
        <h3>Qualifications</h3>

        <p><b>Steward:</b> Stewards are responsible for keeping the judges
        supplied with the supplies they need (especially beer) throughout the
        contest, and for problem-solving any issues that come up.  Stewards
        will begin the day by helping to organize the materials, and once the
        judging begins will be assigned a to serve a single table of judges.
        No special skills are required to be a steward.  Just be on site and
        ready to pitch in with whatever needs doing.</p>

        <p><b>Judge:</b> Judges are responsible for evaluating a series of
        entries according to BJCP guidelines.  We welcome inexperienced or even
        first-time judges, who will be partnered with more experienced judges
        to ensure a fair evaluation of all entries.  Judges should be familiar
        with the 2015 BCJP guidelines and the process of evaluating beer.
        Please contact the judge coordinator (listed above) with any questions
        about your qualifications.</p>

        <h3>Contest Timeline</h3>

        <p>Judging will take place November 12, 2016, at C. H. Evans / Albany
        Pump Station.  There will be two judging sessions -- morning and
        afternoon -- with lunch served in betwee.  Judges may register for one
        or both sessions, but lunch is only provided for those registered for
        both.</p>

        <p>Judges should plan to arrive no later than 9:00am, and aside from
        those selected for the best-of-show round, will be finished judging
        around 3:00.  You are, of course, encouraged to stay around for the
        raffle and announcement of the winners.  Remember that we depend on our
        judges to run a great contest!  If for any reason you cannot make it to
        the contest or may arrive late, please contact the judge coordinator
        immediately so that he can make the proper arrangements.</p>

        <p>Stewards should plan to arrive at 8:30am to help set up the space,
        and to stay until 5:00 to help clean up.</p>

        <p>Judges and stewards are invited to stay for the awards ceremony and
        participate in the raffle.  The Knickerbocker's raffle prizes are
        generously supplied by our <a href="sponsors.html">sponsors</a>.</p>

      </div>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

