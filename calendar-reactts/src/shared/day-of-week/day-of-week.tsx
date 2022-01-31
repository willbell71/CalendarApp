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
 * Day of the week component.
 */
export const DayOfWeek: FC<TProps> = ({ calendarService, date }: TProps): JSX.Element => (
  <>{ calendarService.getDayName(date.getDay()) }</>
);
