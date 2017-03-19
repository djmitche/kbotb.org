import React from 'react';
import { organizer, organizerEmail, judgeCoord, judgeCoordEmail, registrar, registrarEmail } from './constants';

export const Officials = () => (
  <div>
    <h3>Competition Officials</h3>
    <ul>
    <li>Organizer - <a href={`email:${organizerEmail}`}>{organizer}</a> - for all questions</li>
    <li>Judge Coordinator - <a href={`email:${judgeCoordEmail}`}>{judgeCoord}</a> - for questions about judging or stewarding</li>
    <li>Registrar - <a href={`email:${registrarEmail}`}>{registrar}</a> - for questions about entries</li>
    </ul>
  </div>
);
