import React, { FC } from 'react';

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
export const TitleBar: FC<TProps> = ({
  calendarService,
  date,
  showDate,
  showMonth,
  showYear,
  showDay,
  prev,
  today,
  next,
  period
}: TProps): JSX.Element => (
  <div
    className="title-bar"
  >
    <div>
      <h1
        className="title-bar__date"
      >
        { showDate &&
          <span
            className="title-bar__element"
          >
            <DayOfMonth
              date={ date }
              data-testid="title-bar-day-of-month"
            />
          </span>
        }
        { showMonth &&
          <span
            className="title-bar__element"
          >
            <MonthOfYear
              date={ date }
              calendarService={ calendarService }
              data-testid="title-bar-month-of-year"
            />
          </span>
        }
        { showYear &&
          <span
            className="title-bar__element title-bar__element--faint"
          >
            <Year
              date={ date }
              data-testid="title-bar-year"
            />
          </span>
        }
      </h1>

      <p>
        { showDay &&
          <span>
            <DayOfWeek
              date={ date }
              calendarService={ calendarService }
              data-testid="title-bar-day-of-week"
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
        prev={ prev }
        today={ today }
        next={ next }
        period={ period }
        data-testid="title-bar-date-control"
      />
    </div>
  </div>
);
