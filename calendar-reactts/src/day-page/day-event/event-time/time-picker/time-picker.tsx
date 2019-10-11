import * as React from 'react';

import { ICalendarService } from '../../../../services/calendar/icalendar-service';
import { Month } from '../../../../shared/month/month';

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
 * @property {boolean} open - open flag.
 */
export type TState = {
  open: boolean;
}

/**
 * Time Picker component.
 */
export class TimePicker extends React.Component<TProps, TState> {
  // @member {TState} state - component state.
  public state: TState = {
    open: false
  };

  /**
   * Toggle component open state.
   */
  private toggle = () => {
    this.setState((state: TState) => ({
      open: !state.open
    }));
  };

  /**
   * Render component when open.
   */
  private renderOpen = () => {
    return (
      <div className="time-picker__month-view">
        <Month
          calendarService={ this.props.calendarService }
          date={ this.props.date }
          today={ this.props.today }
        />
      </div>
    );
  };

  /**
   * Render component when closed.
   */
  private renderTime = () => {
    return (
    <p>
      <span>{`0${this.props.date.getDate()}`.slice(-2)}/{`0${this.props.date.getMonth() + 1}`.slice(-2)}/{this.props.date.getFullYear()}</span>
      <span className="time-picker__date-view-time">{`0${this.props.date.getHours()}`.slice(-2)}:{`0${this.props.date.getMinutes()}`.slice(-2)}</span>
    </p>
    );
  };

  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div
        className="time-picker"
        onClick={ this.toggle }
      >
        {this.renderTime()}
        {this.state.open && this.renderOpen()}
      </div>
    );
  }
}
