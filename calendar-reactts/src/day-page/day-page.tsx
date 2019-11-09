import * as React from 'react';

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
export class DayPage extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    // get row titles
    const times: string[] = this.props.calendarService.getTimeNames();

    // is it the weekend
    const isWeekend: boolean = (0 === this.props.date.getDay() || 6 === this.props.date.getDay());

    return (
      <div
        className="day-page"
      >
        <div
          className="day-page__times">
          {times.map((time: string, index: number) => {
            const now: boolean = this.props.today.getHours() === index - 1;

            return (
              <div
                key={ index }
                className="day-page__times-row"
              >
                <p
                  className={ `day-page__time ${now ? 'day-page__time--now' : ''}` }
                >{ time }</p>
                <div
                  className={ `day-page__cell ${isWeekend ? 'day-page__cell--weekend' : ''} ${now ? 'day-page__cell--now' : ''}` }
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
                calendarService={ this.props.calendarService }
                date={ this.props.date }
                today={ this.props.today }
              />
            </div>
            <DayEvent
              calendarService={ this.props.calendarService }
              date={ this.props.date }
              today={ this.props.today }
            />
          </div>            
        </div>
      </div>
    );
  }
}
