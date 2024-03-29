import React, { FC } from 'react';

import { ICalendarService } from '../services/calendar/icalendar-service';

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
 * Month page component.
 */
export const MonthPage: FC<TProps> = ({ calendarService, date, today }: TProps): JSX.Element => {
  const calendarDate: Date = calendarService.getStartOfMonthGridDate(date);

  const days: string[] = calendarService.getDayColumnLongTitle();
  const dates: string[] = [...days, ...days, ...days, ...days, ...days, ...days];

  return (
    <div className="month-page">
      {days.map((day: string, index: number) => (
        <p
          key={ index }
          className="month-page__date"
          data-testid="month-page-day"
        >{ day }</p>
      ))}

      {dates.map((d: string, index: number) => {
        const classes: string[] = ['month-page__cell'];
        if (d === 'Sat' || d === 'Sun') {
          classes.push('month-page__cell--weekend');
        }
        if (calendarDate.getMonth() !== date.getMonth()) {
          classes.push('month-page__cell--dead');
        }

        const dateClasses: string[] = ['month-page__cell-date'];
        if (today.getDate() === calendarDate.getDate() &&
            today.getMonth() === calendarDate.getMonth() &&
            today.getFullYear() === calendarDate.getFullYear()) {
          dateClasses.push('month-page__cell-date--today');
        }

        // TODO - add events to date
        const elem: JSX.Element = (
          <div
            key={ index }
            className={ classes.join(' ') }
            data-testid="month-page-date-container"
          >
            <p
              className={ dateClasses.join(' ') }
              data-testid="month-page-date"
            >
              { calendarDate.getDate() }
            </p>
            {/* <p>New Event</p>
            <p>2 more...</p> */}
          </div>
        );

        calendarDate.setDate(calendarDate.getDate() + 1);

        return elem;
      })}
    </div>
  );
};
