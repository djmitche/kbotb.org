import React from 'react';
import { sponsors } from './constants';

const Sponsor = props => (
  <div className="sponsor" key={props.sponsor.name}>
    <a href={props.sponsor.url}>
      <img className="img-responsive center-block sponsor" src={`logos/${props.sponsor.logo}`} />
    </a>
  </div>
);

const Sponsors = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <h2>Thank you to our sponsors!</h2>
        <p>The Knickerbocker would not be possible without the generous support
        of many businesses and organizations in the homebrewing community.</p>
      </div>
    </div>
    <div className="sponsor-list">
      {sponsors.gold.map(spon => (<Sponsor sponsor={spon} />))}
      {sponsors.silver.map(spon => (<Sponsor sponsor={spon} />))}
      {sponsors.bronze.map(spon => (<Sponsor sponsor={spon} />))}
    </div>
  </div>
);

export default Sponsors;
