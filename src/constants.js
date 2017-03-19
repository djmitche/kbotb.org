import React from 'react';
import moment from 'moment';

/* set this to show the results */
export const resultsUrl = null; // = 'http://www.reggiebeer.com/?Web=1000234';
export const registrationUrl = 'http://reggiebeer.com/ReggieEntry.php?CompetitionID=UCXSVE1000234';

export const locationName = 'Park Manor Hotel';
export const locationAddress = '7 Northside Drive, Clifton Park, NY 12065';

export const organizer = 'John Lee';
export const organizerEmail = 'dwboca@gmail.com';
export const judgeCoord = 'Greg Mobley';
export const judgeCoordEmail = 'gregskegs@yahoo.com';
export const registrar = 'Dustin Mitchell';
export const registrarEmail = 'djmitche@gmail.com';

export const prejudgeDate = moment('2017-10-20');
export const contestDate = moment('2017-10-21');
export const judgeRegistrationStartDate = moment('2017-06-01');
export const registrationStartDate = moment('2017-08-01');
export const dropoffStartDate = moment('2017-09-01');
export const entryDueDate = moment('2017-09-29');
export const entryCost = '$8';

const companies = {
  parkManor: {
    name: 'The Park Manor Hotel',
    url: 'http://www.theparkmanorhotel.com/',
    logo: 'pmh.png',
    address:
      <address>
       7 Northside Drive<br />
       Clifton Park, NY 12065
      </address>,
  },
  barleyHopsAndGrapes: {
    name: 'Barley Hops and Grapes',
    url: 'http://barleyhopsandgrapes.com/',
    logo: 'bhg.png',
    address:
      <address>
        16 E Market St<br />
        Red Hook NY 12571<br />
      </address>,
    phone: '(845) 835-8256',
  },
  bitterAndEsters: {
    name: 'Bitter & Esters',
    url: 'http://bitterandesters.com/',
    logo: 'bitterandesters.png',
    address:
      <address>
        700 Washington Ave<br />
        Brooklyn, NY 11238<br />
      </address>,
    phone: '(917) 596-7261',
  },
  saratogaZymurgist: {
    name: 'Saratoga Zymurgist',
    url: 'http://www.saratogaz.com/',
    logo: 'sz.jpg',
    address:
      <address>
        112 Excelsior Ave<br />
        Saratoga Springs, NY 12866<br />
      </address>,
    phone: '(518) 580-9785',
  },
  heGreenbush: {
    name: 'Homebrew Emporium',
    url: 'http://beerbrew.com/',
    logo: 'he.png',
    address:
      <address>
        470 North Greenbush Rd (Route 4)<br />
        Rensselaer, NY 12144<br />
      </address>,
    phone: '(518) 283-7094',
  },
  heBoylston: {
    name: 'West Boylston Homebrew Emporium',
    url: 'http://beerbrew.com/',
    logo: 'he.png',
    address:
      <address>
        45 Sterling Street (Route 12)<br />
        West Boylston, MA 01583<br />
      </address>,
    phone: '(508) 835-3374',
  },
  heCambridge: {
    name: 'Modern Homebrew Emporium',
    url: 'http://beerbrew.com/',
    logo: 'he.png',
    address:
      <address>
        2304 Massachusetts Avenue<br />
        Cambridge, MA 02140<br />
      </address>,
    phone: '(617) 498-0400',
  },
  heSouthShore: {
    name: 'South Shore Homebrew Emporium',
    url: 'http://beerbrew.com/',
    logo: 'he.png',
    address:
      <address>
        58 Randolph Street<br />
        South Weymouth, MA 02190<br />
      </address>,
    phone: '(781) 340-2739',
  },
  heWestchester: {
    name: 'Westchester Homebrew Emporium',
    url: 'http://beerbrew.com/',
    logo: 'he.png',
    address:
      <address>
        550 North Avenue<br />
        New Rochelle, NY 10801<br />
      </address>,
    phone: '(914) 637-2337',
  },
  ejWren: {
    name: 'E. J. Wren Homebrew',
    url: 'http://ejwren.com/',
    logo: 'ejwren.png',
    address:
      <address>
        209 Oswego Street<br />
        Liverpool, NY 13088<br />
      </address>,
    phone: '(315) 457-2282',
  },
  bostonHomebrew: {
    name: 'Boston Homebrew Supply',
    url: 'http://bostonhomebrewsupply.com/',
    logo: 'boston-homebrew.jpg',
    address:
      <address>
        1378 Beacon St<br/>
        Brookline, MA 02446<br/>
      </address>,
    phone: '(617) 879-9550',
  },
  hammersmith: {
    name: 'Hammersmith Homebrew Supplies',
    url: 'http://hammersmithhomebrew.com/',
    logo: 'hammersmith.jpg',
    address:
      <address>
        883 New Loudon Road (Route 9)<br />
        Latham, New York 12110<br />
      </address>,
    phone: '(518) 786-1853',
  },
};

export const mailingAddresses = [
  companies.parkManor,
];

export const dropOffs = [
  companies.parkManor,
  companies.barleyHopsAndGrapes,
  companies.bitterAndEsters,
];

export const sponsors = {
  // bronze = drop-off location only
  bronze: [
    companies.barleyHopsAndGrapes,
    companies.bitterAndEsters,
  ],
  // silver = small prize
  silver: [
  ],
  // gold = BOS prize
  gold: [
    companies.parkManor,
  ],
};

export const judgeInstructions = (
  <p>

  Judges should plan to arrive no later than 9:00am, and aside from those
  selected for the best-of-show round, will be finished judging around 3:00.
  You are, of course, encouraged to stay around for the raffle and announcement
  of the winners.  Remember that we depend on our judges to run a great
  contest!  If for any reason you cannot make it to the contest or may arrive
  late, please contact the judge coordinator immediately so that he can make
  the proper arrangements.

  </p>
);

export const stewardInstructions = (
  <p>

  Stewards should plan to arrive at 8:30am to help set up the space, and to
  stay until 5:00 to help clean up.

  </p>
);
