import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { Officials } from './Officials';
import { prejudgeDate, judgeRegistrationStartDate, organizerEmail, contestDate,
  locationName, locationAddress, judgeInstructions, stewardInstructions, registrationUrl } from './constants';

const Judging = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-3"></div>
      {moment().isBefore(judgeRegistrationStartDate) ? (
        <div className="col-xs-6 alert alert-info text-center">
          <em>Note:</em> Judge registration opens {judgeRegistrationStartDate.format('MMMM Do, YYYY')}.
        </div>
      ) : (
        <div className="col-xs-6 alert alert-info text-center">
          To register to judge or steward in the Knickerbocker Battle of the
          Brews, use the competition site:<br/>
          <a className="btn btn-default" href={registrationUrl}>Register</a><br/>
          <small>Trouble using Reggie?  Click <Link to="/reggie">here</Link> or email the <a href={`email:${organizerEmail}`}>contest organizer</a>.</small>
        </div>
      )}
    </div>
    <div className="row">
      <div className="col-xs-12">
        <Officials />

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

        <p>Judging will take place {contestDate.format('dddd, MMMM Do, YYYY')}
        at the {locationName}, {locationAddress}.{' '}
        {prejudgeDate ?
          <span>There will be three judging sessions -- a small pre-judging
          on {prejudgeDate.format('dddd')} evening, followed by morning and
          afternoon sessions on {contestDate.format('dddd')}, with lunch served
          in between.</span>
        :
          <span>There will be two judging sessions in the morning and afternoon
          on {contestDate.format('dddd')}, with lunch served in between.</span>
        }{' '}
        Note that lunch is only provided for those registered for both sessions
        on {contestDate.format('dddd')}.</p>

        {judgeInstructions}

        {stewardInstructions}

        <h3>Afterward..</h3>

        <p>Judges and stewards are invited to stay after the last session for
        the awards ceremony and <Link to="/party">KBOTB After-Party</Link> - a
        reception of hors d'oeuvres & home brew following the awards
        ceremony.</p>

        <h3>Room Discount</h3>

        <p>If you would like to stay one or more nights, the contest venue, the{' '}
        <a href="http://www.theparkmanorhotel.com/">Park Manor Hotel</a>, is offering
        a discount on rooms during the contest. Just ask for the Knickerbocker rate
        when making your reservation.</p>

        <h3>Sponsors</h3>

        <p>The Knickerbocker's contest and raffle prizes are generously
        supplied by our <Link to="/sponsors">sponsors</Link>.</p>

      </div>
    </div>
  </div>
);

export default Judging;
