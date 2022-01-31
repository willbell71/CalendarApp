import React, { FC } from 'react';

import { EventTime } from './event-time/event-time';
import { EventInfo } from './event-info/event-info';
import { ICalendarService } from '../../services/calendar/icalendar-service';

import './styles.scss';

/**
 * Component props.
 * @property {ICalendarService} calendarService - calendar service provider.
 * @property {Date} date - currently selected date.
 * @property {Date} today - todays date.
 */
export type TProps = {
  calendarService: ICalendarService;
  date: Date;
  today: Date;
};

/**
 * Day event component.
 */
export const DayEvent: FC<TProps> = ({ calendarService, date, today }: TProps): JSX.Element => (
  <div className="day-event">
    <div className="day-event__event-title">
      <input className="day-event__event-input" type="text" placeholder="New Event"/>
      <div className="day-event__event-title-spacer" />
      <select className="day-event__event-title-type" name="" id="">
        <option value="">Work</option>
        <option value="">Home</option>
      </select>
    </div>
    <input className="day-event__event-input" type="text" placeholder="Add Location"/>
    <EventTime
      calendarService={ calendarService }
      date={ date }
      today={ today }
    />
    <input className="day-event__event-input" type="text" placeholder="Add invitees"/>
    <EventInfo/>
  </div>
);
