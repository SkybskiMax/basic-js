import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  if (typeof(date) == 'undefined') {
    return 'Unable to determine the time of year!';
  }

  const validDate = new Date('1995-12-17T03:24:00');
  const newDate = date;


  let testDate = new Date('1995-11-17T03:24:00')
  if (!(date instanceof Date) 
  || date instanceof String 
  || isNaN(date) 
  || typeof(date) == "string"
  || date.getMonth() == undefined 
  || testDate.getMonth !== date.getMonth)
  {
    throw Error('Invalid date!');
  }

  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "fall"
  }
  
}
