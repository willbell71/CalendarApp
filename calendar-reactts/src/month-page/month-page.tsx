import * as React from 'react';

import { ICalendarService } from '../services/calendar/icalendar-service';

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
 * Month page component.
 */
export class MonthPage extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    const calendarDate: Date = this.props.calendarService.getStartOfMonthGridDate(this.props.date);

    const days: string[] = this.props.calendarService.getDayColumnLongTitle();
    const dates: string[] = [...days, ...days, ...days, ...days, ...days, ...days];

    return (
      <div className="month-page">
        {days.map((day: string, index: number) => (<p key={ index } className="month-page__date">{ day }</p>))}

        {dates.map((date: string, index: number) => {
          const classes: string[] = ['month-page__cell'];
          if (date === 'Sat' || date === 'Sun') {
            classes.push('month-page__cell--weekend');
          }
          if (calendarDate.getMonth() !== this.props.date.getMonth()) {
            classes.push('month-page__cell--dead');
          }

          const dateClasses: string[] = ['month-page__cell-date'];
          if (this.props.today.getDate() === calendarDate.getDate() &&
              this.props.today.getMonth() === calendarDate.getMonth() &&
              this.props.today.getFullYear() === calendarDate.getFullYear()) {
            dateClasses.push('month-page__cell-date--today');
          }

          // TODO - add events to date
          const elem: JSX.Element = (
            <div key={ index } className={ classes.join(' ') }>
              <p className={ dateClasses.join(' ') }>{ calendarDate.getDate() }</p>
              {/* <p>New Event</p>
              <p>2 more...</p> */}
            </div>
          );

          calendarDate.setDate(calendarDate.getDate() + 1);

          return elem;
        })}
      </div>
    );
  }
}
