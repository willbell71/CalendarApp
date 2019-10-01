import { ICalendarService } from './icalendar-service';

/**
 * Calendar service.
 */
export class CalendarService implements ICalendarService {
  /**
   * Get name of day of week.
   * @param {number} dayIndex - index of day ( 0 - sunday / 6 - saturday)
   * @return {string} day name.
   */
  public getDayName(dayIndex: number): string {
    const days: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    return days[dayIndex];
  }

  /**
   * Get name of month.
   * @param {number} monthIndex - index of month ( 0 - January / 11 - December )
   * @return {string} month name.
   */
  public getMonthName(monthIndex: number): string {
    const months: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return months[monthIndex];
  }

  /**
   * Get column titles for week grid view.
   * @return {string[[]} list of column titles.
   */
  public getDayColumnTitle(): string[] {
    return ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  }

  /**
   * Return the starting date for a month, to generate a full month grid.
   * @param {Date} start - date to get starting date for.
   * @return {Date} the date at which the month grid begins.
   */
  public getStartOfMonthGridDate(start: Date): Date {
    // get the start of the month
    const startOfMonth: Date = new Date(start.getFullYear(), start.getMonth(), 1);
    // rewind to put monday at start of week
    let dayOfWeek: number = startOfMonth.getDay();
    if (!dayOfWeek) {
      dayOfWeek = 7;
    }
    dayOfWeek--;

    // build first date visible in calendar
    const calendarDate: Date = new Date(start.getFullYear(), start.getMonth(), 1 - dayOfWeek);

    return calendarDate;
  }
}
