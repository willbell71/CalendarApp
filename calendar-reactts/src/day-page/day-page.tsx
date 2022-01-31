import React, { FC } from 'react';

import { ICalendarService } from '../services/calendar/icalendar-service';
import { DayEvent } from './day-event/day-event';
import { Month } from '../shared/month/month';

import './styles.scss';

/**
 * Component properties.
 * @property {Date} data - date to display.
 */
export type TProps = {
  calendarService: ICalendarService;
  date: Date;
  today: Date;
};

/**
 * Day page component.
 */
export const DayPage: FC<TProps> = ({ calendarService, date, today }: TProps): JSX.Element => {
  // get row titles
  const times: string[] = calendarService.getTimeNames();

  // is it the weekend
  const isWeekend: boolean = (0 === date.getDay() || 6 === date.getDay());

  return (
    <div
      className="day-page"
    >
      <div
        className="day-page__times">
        {times.map((time: string, index: number) => {
          const now: boolean = today.getHours() === index - 1;

          return (
            <div
              key={ index }
              className="day-page__times-row"
            >
              <p
                className={ `day-page__time ${now ? 'day-page__time--now' : ''}` }
                data-testid="day-page-time"
              >
                { time }
              </p>
              <div
                className={ `day-page__cell ${isWeekend ? 'day-page__cell--weekend' : ''} ${now ? 'day-page__cell--now' : ''}` }
                data-testid="day-page-weekend"
              />
            </div>
          );
        })}
      </div>
      <div
        className="day-page__event"
      >
        <div>
          <div
            className="day-page__event-month"
          >
            <Month
              calendarService={ calendarService }
              date={ date }
              today={ today }
            />
          </div>
          <DayEvent
            calendarService={ calendarService }
            date={ date }
            today={ today }
          />
        </div>
      </div>
    </div>
  );
};
