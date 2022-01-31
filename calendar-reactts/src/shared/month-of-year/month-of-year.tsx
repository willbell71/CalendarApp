import React, { FC } from 'react';

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
export const MonthOfYear: FC<TProps> = ({ calendarService, date }: TProps): JSX.Element => (
  <>{ calendarService.getMonthName(date.getMonth()) }</>
);
