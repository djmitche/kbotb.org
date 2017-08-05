import React from 'react';
import { partyUrl } from './constants';

const Party = () => (
  <div className="row">
    <div className="col-xs-12">
      <h2>Knickerbocker Battle of the Brews After Party</h2>
      <p><center>October 21, 2017 &bull; 6pm</center>
      <center>Park Manor Hotel &bull; Clifton Park, NY</center></p>

      <br/ >

      <p>Join us for a reception of hors d'oeuvres & home brew after the
      judging takes place.  We will be announcing the category winners, as well as
      the best of show winner during the reception.  Raffle tickets for fantastic
      prizes will be available for purchase and winners will be pulled at the event.</p>

      <p>Ticket price includes: admission to the event, hors d'oeuvres, home
      brew, tasting glass.  A cash bar will also be available.</p>

      <p>This event is open to the public!  You do not need to be a home brewer
      or member of the Saratoga Thoroughbrews or Albany Brew Crafters to attend.
      Bring your friends!</p>

      <p><center><a className="btn btn-success" href={partyUrl}>Get Your Tickets Now!</a><br/></center></p>
    </div>
  </div>
);

export default Party;
