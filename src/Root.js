import React, { Component } from 'react';
import { Link } from 'react-router';
import { resultsUrl, entryCost, entryDueDate, contestDate, locationName, sponsors } from './constants';

export default class SponsorCarousel extends Component {
  constructor(props) {
    super(props);
    this.sponsors = props.sponsors;
    this.next = this.next.bind(this);
    this.state = { index: 0 };
  }

  componentDidMount() {
    this.next();
  }

  next() {
    setTimeout(() => {
      this.setState({ index: (this.state.index + 1) % this.sponsors.length });
      this.next();
    }, 3000);
  }

  render() {
    return (
      <div className="sponsor-carousel">{
        this.sponsors.map((spon, i) => {
          const opacity = i === this.state.index ? 1 : 0;
          const src = require(`./logos/${spon.logo}`);
          return (
            <div className="element">
              <img className="sponsor" style={{ opacity }} src={src} />
            </div>
          );
        })
      }</div>
    );
  }
}

export const Root = () => (
  <div className="root">
    <img className="centered-logo" src="img/kbotb-480.png" />
    <h1>21st Annual Homebrew Contest</h1>
    { /*
    <h2>{contestDate.format('dddd, MMMM Do, YYYY')}</h2>

    <p><em>Want more bragging rights for your homebrew??</em></p>
    <p>What if you could tell your friends that your homebrew is "Award
    Winning"? Here is your opportunity to get your brew evaluated by
    BJCP certified judges.  Not only might you take home a prize, but
    all entries receive valuable written feedback from judges to help
    you improve your homebrew.</p>
    */ }

    <h3 style={{ tetAlign: 'center' }}>New for 2017:<br />After-party with Homebrew Samples, Hors d'Oeuvres,<br />Raffle & more!</h3>
    <p style={{ textAlign: 'center' }}><Link to="/party">More Details</Link></p>

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
        <h3>Entries</h3>
        <em>Entry Deadline:</em> {entryDueDate.format('MMMM Do, YYYY')}<br/>
        <em>BJCP Guidelines:</em> 2015 BJCP<br/>
        <em>Cost:</em> {entryCost} per entry<br/>
        <Link to="/entry-details">More Details</Link>
      </div>
    </div>
    <div>
      <center><h3>Contest Sponsors</h3></center>
    <center><Link to="/sponsors">More Sponsors</Link></center>
      <Link to="/sponsors">
        <SponsorCarousel sponsors={
          sponsors.platinum
            .concat(sponsors.gold)
            .concat(sponsors.silver)
            .concat(sponsors.bronze)} />
      </Link>
    </div>
  </div>
);
