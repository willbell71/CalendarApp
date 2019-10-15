import * as React from 'react';

import { DateControl } from '../date-control/date-control';
import { DayOfMonth } from '../day-of-month/day-of-month';
import { DayOfWeek } from '../day-of-week/day-of-week';
import { EPeriod } from '../../EPeriod';
import { ICalendarService } from '../../services/calendar/icalendar-service';
import { MonthOfYear } from '../month-of-year/month-of-year';
import { Year } from '../year/year';

import './styles.scss';

/**
 * Component properties.
 * @property {ICalendarService} calendarService - calendar service.
 * @property {Date} data - date to display.
 * @property {boolean} showDate? - show the date.
 * @property {boolean} showMonth? - show the month.
 * @property {boolean} showYear? - show the year.
 * @property {boolean} showDay? - show the day of the week.
 * @property {(EPeriod) => void} prev - previous date click handler.
 * @property {() => void} today - previous date click handler.
 * @property {(EPeriod) => void} next - previous date click handler.
 * @property {EPeriod} period - date period.
 */
export type TProps = {
  calendarService: ICalendarService;
  date: Date;
  showDate?: boolean;
  showMonth?: boolean;
  showYear?: boolean;
  showDay?: boolean;
  prev: (period: EPeriod) => void;
  today: () => void;
  next: (period: EPeriod) => void;
  period: EPeriod;
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
      <div
        className="title-bar"
      >
        <div>
          <h1
            className="title-bar__date"
          >
            { this.props.showDate &&
              <span
                className="title-bar__element"
              >
                <DayOfMonth
                  date={ this.props.date }
                />
              </span>
            }
            { this.props.showMonth &&
              <span
                className="title-bar__element"
              >
                <MonthOfYear
                  date={ this.props.date }
                  calendarService={ this.props.calendarService }
                />
              </span>
            }
            { this.props.showYear &&
              <span
                className="title-bar__element title-bar__element--faint"
              >
                <Year
                  date={ this.props.date }
                />
              </span>
            }
          </h1>

          <p>
            { this.props.showDay &&
              <span>
                <DayOfWeek
                  date={ this.props.date }
                  calendarService={ this.props.calendarService }
                />
              </span>
            }
          </p>
        </div>

        <div
          className="title-bar__spacer"
        />

        <div
          className="title-bar__controls"
        >
          <DateControl
            prev={ this.props.prev }
            today={ this.props.today }
            next={ this.props.next }
            period={ this.props.period }
          />
        </div>
      </div>
    );
  }
}
