import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { Officials } from './Officials';
import { entryCost, entryDueDate, prejudgeDate, contestDate, registrationStartDate, organizerEmail,
  locationName, locationAddress, dropoffStartDate, registrationUrl, mailingAddresses, dropOffs } from './constants';

const Location = props => (
  <div className="location">
    {props.location.url ?
      <b><a href={props.location.url}>{props.location.name}</a></b> :
      <b>{props.location.name}</b>}
    {props.location.address}
    {props.location.phone}
    {props.due &&
      <span style={{ fontStyle: 'italic' }}><br />Entries Accepted Until {props.due.format('MM/DD')}</span>}
  </div>
);

const Entries = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-3"></div>
      {moment().isBefore(registrationStartDate) ? (
        <div className="col-xs-6 alert alert-info text-center">
          <em>Note:</em> Entry registration opens {registrationStartDate.format('MMMM Do, YYYY')}.
        </div>
      ) : (
        <div className="col-xs-6 alert alert-info text-center">
          To register your entries for the Knickerbocker, use the competition site:<br/>
          <a className="btn btn-default" href={registrationUrl}>Register</a><br/>
          <small>Trouble using Reggie?  Click <Link to="/reggie">here</Link> or email the <a href={`email:${organizerEmail}`}>contest organizer</a>.</small>
        </div>
      )}
      <div className="col-xs-3"></div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <Officials />

        <h3>Important Dates</h3>
        <ul>
          <li>Entry registration opens {registrationStartDate.format('MMMM Do, YYYY')}.</li>

          <li>Entries must be dropped off, or arrive, after {dropoffStartDate.format('MMMM Do, YYYY')}.</li>

          <li>Entries, registration, and payment are due {entryDueDate.format('MMMM Do, YYYY')}, except as noted below.
          Drop-offs must be delivered before the location closes, and shipped entries
          must <em>arrive</em> by the due date. <em>We can no longer accept entries
          hand-carried to the judging sessions.</em>.</li>

          <li>We will make every effort to track down missing entries between
          the entry deadline and the judging esssions.</li>

          <li>Judging will take place {contestDate.format('dddd, MMMM Do, YYYY')} at the {locationName}, {locationAddress}.{' '}
          {prejudgeDate && <span>A smaller pre-judging session will take place {prejudgeDate.format('dddd, MMMM Do')}.</span>}
          </li>

          <li>The post-event awards ceremony will be live-streamed on <a
          href="https://www.facebook.com/groups/Kbotb.org/">the contest's
          facebook page</a>.</li>

        </ul>

        <h3>Entry Fees</h3>

        <p>Each entry is {entryCost}.  Payment can be made via Paypal (preferred)
        when registering the entry, or by check with the entry itself.  Checks should
        be made out to "Albany Brew Crafters".  Cash payments cannot be accepted.</p>

        <h3>Categories Accepted</h3>
        All categories, including mead and cider, are accepted.
        Note that the categories are from <a href="http://www.bjcp.org/docs/2015_Guidelines_Beer.pdf">2015 BJCP guidelines</a>.
        Page 85 of the style guidelines has a handy translation from 2008 to 2015 styles.

        <h3>What to Enter</h3>
        <p>For each entry, the brewer must submit:</p>

        <ul>

          <li>Two (2) bottles or one pressurized soda bottle with "carbonator".
          Bottles may be of any style, but must contain at least 10 ounces and
          be free of labels and have any identifying marks blacked out.
          Containers with carbonators must contain at least 24 ounces.
          Carbonators will be returned to entrants.</li>

          <li>Bottle identification forms attached to each bottle with a rubber
          band (no glue or tape).</li>

          <li>The appropriate entry fee (check) based on the total number of
          entries unless it has already been paid online.</li>

        </ul>

        <p>For your entry to do best, be sure to supply all of the required
        information and as much optional information as is appropriate for the
        style. Refer to the <b>2015</b> BJCP Style Guidelines for the styles
        that require or may benefit from additional information and for the
        specific information required. Failure to supply required information
        such as Classic Style, Special Ingredients, or Carbonation Level (mead,
        cider) will negatively impact the scoring of your entry. For any
        questions about the entry form, the style guidelines, classifying
        an entry, or supplying additional information, please contact the
        Competition Registrar.</p>

        <p>Bottles will not be returned.</p>

        <h4>Packing and Shipping</h4>

        <p>Carefully pack your entries in a sturdy box. Line the inside of your
        carton with a plastic trash bag. Partition and pack each bottle with
        adequate packaging material. Do not over pack! Write clearly: "Fragile.
        This Side Up." on the package. Your package should weigh less than 25
        pounds. Please refrain from using "messy" packaging materials such a
        Styrofoam "peanuts" or pellets; please use packaging material such as
        bubble wrap.</p>

        <p>Enclose each of of your bottle labels in a small zip-top bag before
        attaching to their respective bottles with a rubber band. This makes it
        possible for the organizer to identify specifically which beer has
        broken if there is damage during shipment.  The labels must be removed
        before judging, so do not tape or glue to the bottle.</p>

        <p>Every reasonable effort will be made to contact entrants whose
        bottles have broken to make arrangements for sending replacement
        bottles.</p>

        <p>It is not against any Bureau of Alcohol, Tobacco and Firearms (ATF)
        regulations or federal laws to ship your entries via privately owned shipping
        company for analytical purposes. However, IT IS ILLEGAL TO SHIP ALCOHOLIC
        BEVERAGES VIA THE U.S. POSTAL SERVICE. Private shipping companies have the
        right to refuse your shipment if they are informed that the package contains
        glass and/or alcoholic beverages. Be aware that entries mailed
        internationally are often required by customs to have proper documentation.
        These entries might be opened and/or returned to the shipper by customs'
        officials at their discretion. It is solely the entrant's responsibility to
        follow all applicable laws and regulations.</p>

        <h3>Mail-in Locations</h3>

        <p>Mail your entry to</p>

        <div className="entry-locations">
        {mailingAddresses.map(({ company, due }) =>
            (<Location key={location.name} location={company} due={due} />))}
        </div>

        <h3>Drop-Off Locations</h3>

        <p>Drop off your fully-labeled bottles at any of these locations. <b>IMPORTANT:</b>
        You must still package your entries, even if you are
        dropping off! Bring your entries in a light-proof, stackable box so the
        staff at the location can store them efficiently.  Locations may turn
        you away if you show up with a bottle in each hand.</p>

        <div className="entry-locations">
        {dropOffs.map(({ company, due }) =>
            (<Location key={location.name} location={company} due={due} />))}
        </div>

        {moment().isBefore(registrationStartDate) &&
          <p>Additional drop-off and shipping locations may be added before {registrationStartDate.format('MMMM Do')}.</p>}

        <h3>Awards</h3>

        <p>The awards ceremony will take place as soon as all judging is
        completed and results can be compiled.  Medals or ribbons will be
        awarded to 1st, 2nd, and 3rd place in each award flight.  The 1st place
        entry in each category will advance to the Best of Show round where the
        top three beers will be selected.  Additional prizes may be awarded to
        those winners present at the awards ceremony at the discretion of the
        competition organizers.</p>

        <p>Stick around after the awards ceremony for the inaugural <Link
        to="/party">KBOTB After-Party</Link>!</p>

        <p>Score sheets and awards will be available for pick up after the
        ceremony concludes. Awards and score sheets not picked up and BJCP
        experience records will be sent out within two weeks of the competition
        date. Results will be promptly posted to the competition web site.</p>

        <p>The Knickerbocker's prizes are generously supplied by our <a
        href="sponsors.html">sponsors</a>.  All of these organizations have
        been generous enough to support the contest; please reward them by
        giving them your business!</p>

      </div>
    </div>
  </div>
);

export default Entries;
