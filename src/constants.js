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
