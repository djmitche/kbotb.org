import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { Officials } from './Officials';
import { entryCost, entryDueDate, prejudgeDate, contestDate, registrationStartDate, organizerEmail,
  locationName, locationAddress, dropoffStartDate } from './constants';

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
          <a className="btn btn-default" href="http://reggiebeer.com/ReggieEntry.php?CompetitionID=UCXSVE1000234">Register</a><br/>
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

          <li>Entries, registration, and payment are due {entryDueDate.format('MMMM Do, YYYY')}.
          Drop-offs must be delivered before the location closes, and shipped
          entries must <em>arrive</em> by the {entryDueDate.format('Do')}. <em>We can no longer
          accept entries hand-carried to the judging sessions.</em>.</li>

          <li>We will make every effort to track down missing entries between
          the entry deadline and the judging esssions.</li>

          <li>Judging will take place {contestDate.format('dddd, MMMM Do, YYYY')} at the {locationName}, {locationAddress}.{' '}
          {prejudgeDate && <span>A smaller pre-judging session will take place {prejudgeDate.format('dddd, MMMM Do')}.</span>}
          </li>

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

        <h3>Drop-Off Locations</h3>

        Drop-off and shipping locations will be announced soon.  We will have drop-off locations
        throughout the Northeast.

{/*

        <p>Mail your entry to</p>

        <address>
          The C. H. Evans Brewing company at<br/>
          The Albany Pump Station<br/>
          19 Quackenbush Square, Albany, NY 12207
        </address>

        <p>or drop it off at one of the locations below.</p>

        <p>For those who have entered and judged before, note that in the
        interests of contest efficiency, <em>we are no longer accepting entries
        hand-carried to the contest in November</em></p>

        <h3>Drop-Off Locations</h3>

        Drop off your fully-labeled bottles at any of these locations.  Note
        that locations may appreciate it if you bring along an empty case that
        can hold your entries along with other entrants' bottles.

        <br />

        <div className="container">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Barley Hops and Grapes</b><br/>
            <address>
              16 E Market St<br />
              Red Hook NY 12571<br />
              (845) 835-8256
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Saratoga Zymurgist</b><br/>
            <address>
              112 Excelsior Ave<br />
              Saratoga Springs, NY 12866<br />
              (518) 580-9785
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Albany Pump Station</b><br/>
            <address>
              19 Quackenbush Square<br />
              Albany, NY 12207<br />
              (518) 447-9000
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Homebrew Emporium</b><br/>
            <address>
              470 North Greenbush Rd (Route 4)<br />
              Rensselaer, NY 12144<br />
              (518) 283-7094
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>West Boylston Homebrew Emporium</b><br/>
            <address>
              45 Sterling Street (Route 12)<br />
              West Boylston, MA 01583<br />
              (508) 835-3374
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Modern Homebrew Emporium</b><br/>
            <address>
              2304 Massachusetts Avenue<br />
              Cambridge, MA 02140<br />
              (617) 498-0400
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>South Shore Homebrew Emporium</b><br/>
            <address>
              58 Randolph Street<br />
              South Weymouth, MA 02190<br />
              (781) 340-2739
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Westchester Homebrew Emporium</b><br/>
            <address>
              550 North Avenue<br />
              New Rochelle, NY 10801<br />
              (914) 637-2337
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>E. J. Wren Homebrew</b><br/>
            <address>
              209 Oswego Street<br />
              Liverpool, NY 13088<br />
              (315) 457-2282
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Boston Homebrew Supply</b><br/>
            <address>
              1378 Beacon St<br/>
              Brookline, MA 02446<br/>
              (617) 879-9550
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Hammersmith Homebrew Supplies</b><br/>
            <address>
              883 New Loudon Road (Route 9)<br />
              Latham, New York 12110<br />
              (518) 786-1853
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <b>Bitter & Esters</b><br/>
            <address>
              700 Washington Ave<br />
              Brooklyn, NY 11238<br />
              (917) 596-7261
            </address>
          </div>
        </div>
*/}
        <h3>Awards</h3>

        <p>The awards ceremony will take place as soon as all judging is
        completed and results can be compiled.</p>

        <p>Medals or ribbons will be awarded to 1st, 2nd, and 3rd place in each
        award flight.</p>

        <p>The 1st place entry in each category will advance to the Best of
        Show round where the top three beers will be selected.</p>

        <p>Additional prizes may be awarded to those winners present at the
        awards ceremony at the discretion of the competition organizers.</p>

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
