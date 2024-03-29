import React, { FC } from 'react';

import { ICalendarService } from '../services/calendar/icalendar-service';
import { Month } from '../shared/month/month';
import { MonthOfYear } from '../shared/month-of-year/month-of-year';

import './styles.scss';

/**
 * Component properties.
 * @property {ICalendarService} calendarService - calendar service.
 * @property {Date} date - date to display.
 * @property {Date} today - today's date.
 */
export type TProps = {
  calendarService: ICalendarService;
  date: Date;
  today: Date;
};

/**
 * Year page component.
 */
export const YearPage: FC<TProps> = ({ calendarService, date, today }: TProps): JSX.Element => {
  const months: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div
      className="year-page"
    >
      {months.map((month: number, index: number) => {
        const calendarMonths: Date = new Date(date.getFullYear(), month, 1);

        return (
          <div
            key={ index }
            className={`year-page__cell--${calendarService.getMonthName(month).toLowerCase()}`}
          >
            <MonthOfYear
              date={ calendarMonths }
              calendarService= { calendarService }
              data-testid="year-page-month-of-year"
            />
            <Month
              date={ calendarMonths }
              calendarService= { calendarService }
              today={ today }
              data-testid="year-page-month"
            />
          </div>
        );
      })}
    </div>
  );
};
