import * as React from 'react';

import { TimePicker } from './time-picker/time-picker';

import { ICalendarService } from '../../../services/calendar/icalendar-service';

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
 * Component state.
 * @property {boolean} open - is control expanded.
 */
export type TState = {
  open: boolean;
};

/**
 * Event Time component.
 */
export class EventTime extends React.Component<TProps, TState> {
  // @member {TState} state - component state.
  public state: TState = {
    open: false
  };

  /**
   * Render open component.
   * @return {JSX.Element} render.
   */
  private renderOpen(): JSX.Element {
    return (
      <div className="event-time__open">
        <p>all-day:</p>
        <input
          className="event-time__open-checkbox"
          type="checkbox"
        />

        <p>starts:</p>
        <div>
          <TimePicker
            calendarService={ this.props.calendarService }
            date={ this.props.date }
            today={ this.props.today }
          />
        </div>

        <p>ends:</p>
        <div>
          <TimePicker
            calendarService={ this.props.calendarService }
            date={ this.props.date }
            today={ this.props.today }
          />
        </div>

        <p>repeat:</p>
        <div>
          <select
            className="event-time__open-select"
            name=""
            id=""
          >
            <option value="">None</option>
            <option value="">Every Day</option>
            <option value="">Every Week</option>
            <option value="">Every Month</option>
            <option value="">Every Year</option>
            <option value="">Custom...</option>
          </select>
        </div>

        <p>travel time:</p>
        <div>
          <select
            className="event-time__open-select"
            name=""
            id=""
          >
            <option value="">None</option>
            <option value="">5 minutes</option>
            <option value="">15 minutes</option>
            <option value="">30 minutes</option>
            <option value="">1 hour</option>
            <option value="">1.5 hours</option>
            <option value="">2 hours</option>
            <option value="">Custom...</option>
          </select>
        </div>

        <p>alert:</p>
        <select
          className="event-time__open-select"
          name=""
          id=""
        >
          <option value="">None</option>
          <option value="">At time of event</option>
          <option value="">5 minutes before</option>
          <option value="">10 minutes before</option>
          <option value="">15 minutes before</option>
          <option value="">30 minutes before</option>
          <option value="">1 hour before</option>
          <option value="">2 hours before</option>
          <option value="">1 day before</option>
          <option value="">2 days before</option>
          <option value="">Custom...</option>
        </select>
      </div>
    );
  }

  /**
   * Render closed component.
   * @return {JSX.Element} render.
   */
  private renderClosed(): JSX.Element {
    return (
      <div>
        <div className="event-time__closed">
          <p>Monday 7 Oct</p>
          <p>16:00 to 17:00</p>
        </div>
        <p className="event-time__closed-caption">Add Alert, Repeat or Travel Time</p>
      </div>
    );
  }

  /**
   * Toggle open closed state of control.
   */
  private toggle: () => void = (): void => {
    this.setState((state: TState) => ({
      open: !state.open
    }));
  };

  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div className="event-time" onClick={ this.toggle }>
        { this.state.open ? this.renderOpen() : this.renderClosed() }
      </div>
    );
  }
}
