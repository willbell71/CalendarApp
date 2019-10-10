import * as React from 'react';

import { EventTime } from './event-time/event-time';
import { EventInfo } from './event-info/event-info';

import './styles.scss';

/**
 * Day event component.
 */
export class DayEvent extends React.Component {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div className="day-event">
        <div className="day-event__event-title">
          <input className="day-event__event-input" type="text" placeholder="New Event"/>
          <div className="day-event__event-title-spacer"></div>
          <select className="day-event__event-title-type" name="" id="">
            <option value="">Work</option>
            <option value="">Home</option>
          </select>
        </div>
        <input className="day-event__event-input" type="text" placeholder="Add Location"/>
        <EventTime/>
        <input className="day-event__event-input" type="text" placeholder="Add invitees"/>
        <EventInfo/>
      </div>
    );
  }
}
