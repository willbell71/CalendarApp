import * as React from 'react';

import { ICalendarService } from '../../services/calendar/icalendar-service';

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
 * Month component.
 */
export class Month extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    const calendarDate: Date = this.props.calendarService.getStartOfMonthGridDate(this.props.date);

    const days: string[] = this.props.calendarService.getDayColumnTitle();
    const dates: string[] = [...days, ...days, ...days, ...days, ...days, ...days];

    return (
      <div className="month">
        {days.map((day: string, index: number) => (
          <p
            key={ index }
            className="month__cell"
          >{ day }</p>
        ))}

        {dates.map((date: string, index: number) => {
          const classes: string[] = ['month__cell'];
          if (date === 'S') {
            classes.push('month__cell--weekend');
          }
          if (calendarDate.getMonth() !== this.props.date.getMonth()) {
            classes.push('month__cell--dead');
          }
          if (calendarDate.getMonth() === this.props.date.getMonth() &&
              calendarDate.getDate() === this.props.today.getDate() &&
              calendarDate.getMonth() === this.props.today.getMonth() &&
              calendarDate.getFullYear() === this.props.today.getFullYear()) {
            classes.push('month__cell--today');
          }
          
          const elem: JSX.Element = (
            <p
              key={ index }
              className={ classes.join(' ') }
            >{ calendarDate.getDate() }</p>);

          calendarDate.setDate(calendarDate.getDate() + 1);

          return elem;
        })}
      </div>
    );
  }
}
