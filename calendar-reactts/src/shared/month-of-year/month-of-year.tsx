import * as React from 'react';

import { ICalendarService } from '../../services/calendar/icalendar-service';

/**
 * Component properties.
 * @property {ICalendarService} calendarService - calendar service.
 * @property {Date} data - date to display.
 */
export type TProps = {
  calendarService: ICalendarService;
  date: Date;
};

/**
 * Month Of Year component.
 */
export class MonthOfYear extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <>{ this.props.calendarService.getMonthName(this.props.date.getMonth()) }</>
    );
  }
}
