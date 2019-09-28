import * as React from 'react';

import { DateControl } from '../date-control/date-control';
import { DayOfMonth } from '../day-of-month/day-of-month';
import { DayOfWeek } from '../day-of-week/day-of-week';
import { MonthOfYear } from '../month-of-year/month-of-year';
import { Year } from '../year/year';

import './styles.scss';

/**
 * Component properties.
 * @property {Date} data - date to display.
 * @property {boolean} showDate? - show the date.
 * @property {boolean} showMonth? - show the month.
 * @property {boolean} showYear? - show the year.
 * @property {boolean} showDay? - show the day of the week.
 * @property {() => void} prev - previous date click handler.
 * @property {() => void} today - previous date click handler.
 * @property {() => void} next - previous date click handler.
 */
export type TProps = {
  date: Date;
  showDate?: boolean;
  showMonth?: boolean;
  showYear?: boolean;
  showDay?: boolean;
  prev: () => void;
  today: () => void;
  next: () => void;
};

/**
 * Title Bar component.
 */
export class TitleBar extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div className="title-bar">
        <div>
          <h1>
            { this.props.showDate && <span className="title-bar__element">
              <DayOfMonth date={ this.props.date }/>
            </span> }
            { this.props.showMonth && <span className="title-bar__element">
              <MonthOfYear date={ this.props.date }/>
            </span> }
            { this.props.showYear && <span className="title-bar__element title-bar__element--faint">
              <Year date={ this.props.date }/>
            </span> }
          </h1>
          <p>
            { this.props.showDay && <span>
              <DayOfWeek date={ this.props.date }/>
            </span> }
          </p>
        </div>
        <div className="title-bar__spacer"/>
        <div className="title-bar__controls">
          <DateControl
            prev={ this.props.prev }
            today={ this.props.today }
            next={ this.props.next }
          />
        </div>
      </div>
    );
  }
}
