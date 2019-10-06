import * as React from 'react';

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
export class YearPage extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    const months: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return (
      <div
        className="year-page"
      >
        {months.map((month: number, index: number) => {
          const calendarMonths: Date = new Date(this.props.date.getFullYear(), month, 1);

          return (
            <div
              key={ index }
            >
              <MonthOfYear
                date={ calendarMonths }
                calendarService= { this.props.calendarService }
              />
              <Month
                date={ calendarMonths }
                calendarService= { this.props.calendarService }
                today={ this.props.today }
              />
            </div>
          );
        })}
      </div>
    );
  }
}
