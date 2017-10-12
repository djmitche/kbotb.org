import React from 'react';
import moment from 'moment';

/* set this to show the results */
export const resultsUrl = null; // = 'http://www.reggiebeer.com/?Web=1000234';
export const registrationUrl = 'http://reggiebeer.com/ReggieEntry.php?CompetitionID=UCXSVE1000234';
export const partyUrl = 'http://www.brownpapertickets.com/event/3051779';

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

const shuffle = a => {
  const result = a;
  for (let i = result.length; i; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [result[i - 1], result[j]] = [result[j], result[i - 1]];
  }
  return result;
};

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
  vtHomebrew: {
    name: 'Vermont Homebrew Supply',
    url: 'http://vermonthomebrew.com/',
    logo: 'vthomebrew.png',
    address:
      <address>
        147 E. Allen Street, Route 15<br />
        Winooski, Vermont 05404<br />
      </address>,
    phone: '(802) 655-2070',
  },
  shmaltz: {
    name: 'Shmaltz Brewing',
    url: 'http://shmaltzbrewing.com/',
    logo: 'shmaltz.png',
    address:
      <address>
        C/O KBOTB<br />
        6 Fairchild Square<br />
        Clifton Park, NY. 12065
      </address>,
    phone: '(518) 406-5430',
  },
  hopsAndBarley: {
    name: 'Hops & Barley',
    url: 'https://www.facebook.com/HopsandBarleyMarket/',
    logo: 'hopsandbarley.png',
    address:
      <address>
        756 Glen Street<br />
        Queensbury, NY 12804
      </address>,
    phone: '(518) 798-2337',
  },
  battleHill: {
    name: 'Battle Hill Brewing Co.',
    url: 'https://battlehillbrewing.com/',
    logo: 'battlehill.png',
    address:
      <address>
        4 Charles St<br />
        Fort Ann, NY 12827
      </address>,
    phone: '(518) 639-1033',
  },
  ninePin: {
    name: 'Nine Pin Cider Works',
    url: 'http://www.ninepincider.com/',
    logo: 'ninepin.png',
    address:
      <address>
        929 Broadway<br />
        Albany, NY 12207
      </address>,
    phone: '(518) 639-1033',
  },
  zymology: {
    name: 'Zymology Labs',
    url: 'http://www.zymologylabs.com/',
    logo: 'zymology.png',
    address:
      <address>
        716 Pine Street<br />
        Burlington, VT
      </address>,
    phone: '(802) 318-1583',
  },
  brewersFriend: {
    name: 'Brewer\'s Friend',
    url: 'https://www.brewersfriend.com/',
    logo: 'brewers-friend.png',
  },
  aih: {
    name: 'Adventures In Homebrewing',
    url: 'http://www.homebrewing.org/',
    logo: 'aih.jpg',
    address:
      <address>
        23869 Van Born Rd<br />
        Taylor, MI 48180
      </address>,
    phone: '(313)-277-2739',
  },
  fermentis: {
    name: 'Fermentis',
    url: 'http://www.fermentis.com/',
    logo: 'fermentis.png',
  },
  rubyStreet: {
    name: 'Ruby Street Brewing',
    url: 'http://www.rubystreetbrewing.com/',
    logo: 'rubystreet.png',
    address:
      <address>
        PO BOX 271722<br />
        Fort Collins, CO 80527
      </address>,
    phone: '(970) 673-7829',
  },
  bsg: {
    name: 'BSG CraftBrewing',
    url: 'https://bsgcraftbrewing.com/',
    logo: 'bsg.jpg',
    phone: '(800) 374-2739',
  },
  fiveStar: {
    name: 'Five Star Chemicals & Supply, Inc.',
    url: 'http://www.fivestarchemicals.com/',
    logo: 'fivestar.png',
    address:
      <address>
        4915 E. 52nd Ave<br />
        Commerce City, CO 80022
      </address>,
    phone: '(800) 782-7019',
  },
  mohawkTapRoom: {
    name: 'Mohawk Tap Room',
    url: 'http://www.mohawktaproom.com/',
    logo: 'mohawk-tap-room.jpg',
    address:
      <address>
        153 Mohawk Ave<br />
        Scotia, NY 12302
      </address>,
    phone: '(518)357-8005',
  },
  aha: {
    name: 'American Homebrewers Association',
    url: 'https://www.homebrewersassociation.org',
    logo: 'aha.png',
  },
  love2Brew: {
    name: 'Love2Brew',
    url: 'https://www.love2brew.com/',
    logo: 'love2brew.png',
  },
  craftBeerAndBrewing: {
    name: 'Craft Beer & Brewing Magazine',
    url: 'https://beerandbrewing.com/',
    logo: 'cbb.png',
  },
  dudaDiesel: {
    name: 'Duda Diesel Biodiesel Supply',
    url: 'https://www.dudadiesel.com/',
    logo: 'duda.jpg',
  },
  angryBeaver: {
    name: 'Angry Beaver Knives',
    url: 'https://www.facebook.com/ADKWLC/',
    logo: 'angry-beaver.png',
  },
  siebel: {
    name: 'Siebel Institute',
    url: 'https://www.siebelinstitute.com/',
    logo: 'siebel.png',
  },
  freshops: {
    name: 'Freshops',
    url: 'http://freshops.com/',
    logo: 'freshops.png',
  },
  sierraNevada: {
    name: 'Sierra Nevada',
    url: 'http://www.sierranevada.com/',
    logo: 'sierra-nevada.png',
  },
  meanMax: {
    name: 'Mean Max Brew Works',
    url: 'http://www.meanmaxbrew.com/',
    logo: 'meanmax.png',
  },
  whiteLabs: {
    name: 'White Labs',
    url: 'http://www.whitelabs.com/',
    logo: 'whitelabs.png',
  },
  brewBag: {
    name: 'Brew Bag',
    url: 'https://www.brewinabag.com/',
    logo: 'biab.png',
  },
  argyle: {
    name: 'Argyle Brewing',
    url: 'http://argylebrewing.com/',
    logo: 'argyle.png',
  },
  grogTag: {
    name: 'GrogTag',
    url: 'http://www.grogtag.com/',
    logo: 'grogtag.jpg',
  },
  henryStreet: {
    name: 'Henry Street Taproom',
    url: 'http://www.henrystreettaproom.com/',
    logo: 'henrysttaproom.png',
  },
  kegConnection: {
    name: 'Keg Connection',
    url: 'https://www.kegconnection.com/',
    logo: 'kegconn.png',
  },
  wyeast: {
    name: 'Wyeast',
    url: 'https://wyeastlab.com/',
    logo: 'wyeast.png',
  },
  amoretti: {
    name: 'Amoretti',
    url: 'https://amoretti.com/',
    logo: 'amoretti.png',
  },
  theFactory: {
    name: 'The Factory Eatery & Spirits',
    url: 'http://www.thefactoryeatery.com/',
    logo: 'factory.png',
  },
  beerDust: {
    name: 'Beer Dust',
    url: 'https://beerdust.com/',
    logo: 'beerdust.png',
  },
  allAboutBeer: {
    name: 'All About Beer Magazine',
    url: 'http://allaboutbeer.com',
    logo: 'aab.png',
  },
  bells: {
    name: 'Bell\'s Brewery',
    url: 'https://www.bellsbeer.com/',
    logo: 'bells.png',
  },
  spike: {
    name: 'Spike Brewing',
    url: 'https://spikebrewing.com/',
    logo: 'spike.png',
  },
  bevElements: {
    name: 'Beverage Elements',
    url: 'https://beveragelements.com/',
    logo: 'bevElements.png',
  },
  adk: {
    name: 'Adirondack Brewery',
    url: 'http://adkbrewery.com/',
    logo: 'adk.png',
  },
  hudson: {
    name: 'Hudson Brewing',
    url: 'https://www.hudsonbrew.com/',
    logo: 'hudson.png',
  },
  madison: {
    name: 'Madison Brewing Company.',
    url: 'http://madisonbrewingco.com/',
    logo: 'madison.png',
  },
  artisinal: {
    name: 'Artisinal Brew Works',
    url: 'https://artisanalbrewworks.com/',
    logo: 'artisinal.png',
  },
  slyboro: {
    name: 'Slyboro Cider House',
    url: 'http://www.slyboro.com/',
    logo: 'slyboro.png',
  },
  madjack: {
    name: 'Mad Jack Brewing Co',
    url: 'http://www.vandycklounge.com/',
    logo: 'madjack.png',
  },
  pinhead: {
    name: 'Pinhead Susan\'s',
    url: 'http://www.pinheadsusan.com/',
    logo: 'pinhead.png',
  },
  stockade: {
    name: 'The Stockade Inn',
    url: 'https://stockadeinn.com/',
    logo: 'stockade.png',
  },
  royalMeadery: {
    name: 'Royal Meadery',
    url: 'http://royalmeadery.com/',
    logo: 'royalMeadery.jpg',
  },
  byo: {
    name: 'BYO',
    url: 'https://byo.com/',
    logo: 'byo.png',
  },
};

export const mailingAddresses = [
 { company: companies.shmaltz, due: moment('2017-10-07') },
];

export const dropOffs = [
  // for locations with a special due date, include the "due" field
  { company: companies.barleyHopsAndGrapes },
  { company: companies.bitterAndEsters },
  { company: companies.saratogaZymurgist, due: moment('2017-10-07') },
  { company: companies.heGreenbush, due: moment('2017-10-07') },
  { company: companies.heBoylston },
  { company: companies.heCambridge },
  { company: companies.heSouthShore },
  { company: companies.heWestchester },
  { company: companies.vtHomebrew },
  { company: companies.bostonHomebrew },
  { company: companies.ejWren },
  { company: companies.hammersmith, due: moment('2017-10-07') },
  { company: companies.hopsAndBarley, due: moment('2017-10-07') },
  { company: companies.shmaltz, due: moment('2017-10-07') },
];

export const sponsors = {
  bronze: shuffle([
    companies.saratogaZymurgist,
    companies.heGreenbush,
    companies.vtHomebrew,
    companies.bostonHomebrew,
    companies.hammersmith,
    companies.aha,
    companies.beerDust,
    companies.fermentis,
    companies.siebel,
    companies.sierraNevada,
    companies.whiteLabs,
    companies.wyeast,
    companies.bells,
    companies.theFactory,
  ]),
  silver: shuffle([
    companies.bitterAndEsters,
    companies.ejWren,
    companies.barleyHopsAndGrapes,
    companies.battleHill,
    companies.ninePin,
    companies.aih,
    companies.fiveStar,
    companies.hopsAndBarley,
    companies.mohawkTapRoom,
    companies.dudaDiesel,
    companies.brewBag,
    companies.argyle,
    companies.grogTag,
    companies.amoretti,
    companies.allAboutBeer,
    companies.spike,
    companies.bsg,
    companies.bevElements,
    companies.adk,
    companies.hudson,
    companies.artisinal,
    companies.slyboro,
    companies.madjack,
    companies.pinhead,
    companies.stockade,
    companies.royalMeadery,
    companies.byo,
  ]),
  gold: shuffle([
    companies.brewersFriend,
    companies.craftBeerAndBrewing,
    companies.kegConnection,
    companies.meanMax,
    companies.rubyStreet,
    companies.zymology,
    // specialty food groups (Jim Hume's sister in law)
    companies.shmaltz,
    companies.madison,
  ]),
  platinum: shuffle([
    companies.parkManor,
    companies.henryStreet,
  ]),
};

export const judgeInstructions = (
  <p>

  Judges should plan to arrive no later than 8:30am, and aside from those
  selected for the best-of-show round, will be finished judging around 4:00.
  You are, of course, encouraged to stay around for the raffle and announcement
  of the winners.  Remember that we depend on our judges to run a great
  contest!  If for any reason you cannot make it to the contest or may arrive
  late, please contact the judge coordinator immediately so that he can make
  the proper arrangements.

  </p>
);

export const stewardInstructions = (
  <p>

  Stewards should plan to arrive at 8:00am to help set up the space, and to
  stay until 5:00 to help clean up.

  </p>
);
