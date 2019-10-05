/**
 * Calendar service interface.
 * @property {(dayIndex: number) => string} getDayName - get the name of a day of the week.
 * @property {(monthIndex: number) => string} getMonthName - get the name of a month of the year.
 * @property {() => string[]} getDayColumnTitle - get the column titles for a week grid.
 * @property {(start: Date) => Date} getStartOfMonthGridDate - generate a starting date for a full month grid.
 */
export interface ICalendarService {
  /**
   * Get name of day of week.
   * @param {number} dayIndex - index of day ( 0 - sunday / 6 - saturday)
   * @return {string} day name.
   */
  getDayName: (dayIndex: number) => string;

  /**
   * Get name of month.
   * @param {number} monthIndex - index of month ( 0 - January / 11 - December )
   * @return {string} month name.
   */
  getMonthName: (monthIndex: number) => string;

  /**
   * Get column titles for week grid view.
   * @return {string[[]} list of column titles.
   */
  getDayColumnTitle: () => string[];

  /**
   * Get column long titles for week grid view.
   * @return {string[[]} list of column titles.
   */
  getDayColumnLongTitle: () => string[];

  /**
   * Return the starting date for a month, to generate a full month grid.
   * @param {Date} start - date to get starting date for.
   * @return {Date} the date at which the month grid begins.
   */
  getStartOfMonthGridDate: (start: Date) => Date;
}
