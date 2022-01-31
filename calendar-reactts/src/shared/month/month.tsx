import React, { FC } from 'react';

import { ICalendarService } from '../../services/calendar/icalendar-service';

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
 * Month component.
 */
export const Month: FC<TProps> = ({ calendarService, date, today }: TProps): JSX.Element => {
  const calendarDate: Date = calendarService.getStartOfMonthGridDate(date);

  const days: string[] = calendarService.getDayColumnTitle();
  const dates: string[] = [...days, ...days, ...days, ...days, ...days, ...days];

  return (
    <div className="month">
      {days.map((day: string, index: number) => (
        <p
          key={ index }
          className="month__cell"
          data-testid="month-day"
        >
          { day }
        </p>
      ))}

      {dates.map((d: string, index: number) => {
        const classes: string[] = ['month__cell'];
        if (d === 'S') {
          classes.push('month__cell--weekend');
        }
        if (calendarDate.getMonth() !== date.getMonth()) {
          classes.push('month__cell--dead');
        }
        if (calendarDate.getMonth() === date.getMonth() &&
            calendarDate.getDate() === today.getDate() &&
            calendarDate.getMonth() === today.getMonth() &&
            calendarDate.getFullYear() === today.getFullYear()) {
          classes.push('month__cell--today');
        }

        const elem: JSX.Element = (
          <p
            key={ index }
            className={ classes.join(' ') }
            data-testid="month-date"
          >
            { calendarDate.getDate() }
          </p>
        );

        calendarDate.setDate(calendarDate.getDate() + 1);

        return elem;
      })}
    </div>
  );
};
