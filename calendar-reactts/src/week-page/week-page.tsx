import React, { FC } from 'react';

import { ICalendarService } from '../services/calendar/icalendar-service';

import './styles.scss';

/**
 * Component properties.
 * @property {ICalendarService} calendarService - calendar service provider.
 * @property {Date} date - date to display.
 * @property {Date} today - today's date.
 */
export type TProps = {
  calendarService: ICalendarService,
  date: Date;
  today: Date;
};

/**
 * Week page component.
 */
export const WeekPage: FC<TProps> = ({ calendarService, date, today }: TProps): JSX.Element => {
  // build column titles
  const titles: string[] = ['', ...calendarService.getDayColumnLongTitle()];
  // get row titles
  const times: string[] = calendarService.getTimeNames();

  // get date for start of week
  const startDate: Date = calendarService.getStartOfWeekGridDate(date);

  // determine if time line is visible ( ie if today is visible show a line for the current time )
  let isTodayVisible: boolean = false;

  return (
    <div
      className="week-page"
    >

      {titles.map((title: string, index: number) => {
        const dateClassList: string[] = ['week-page__day-date'];
        if (index > 5) {
          dateClassList.push('week-page__day-date--weekend');
        }
        if (today.getFullYear() === startDate.getFullYear() &&
            today.getMonth() === startDate.getMonth() &&
            today.getDate() === startDate.getDate()) {
          dateClassList.push('week-page__day-date--today');

          isTodayVisible = true;
        }

        const dayClassList: string[] = ['week-page__day'];
        if (index > 5) {
          dayClassList.push('week-page__day--weekend');
        }

        const elem: JSX.Element = index ?
          (
            <p
              key={ index }
              className={ dayClassList.join(' ') }
              data-testid="week-page-title"
            >
              { title }
              <span
                className={dateClassList.join(' ')}
                data-testid="week-page-date"
              >
                { startDate.getDate() }
              </span>
            </p>
          ) : (
            <p
              key={ index }
            />
          );

        if (index > 0) {
          startDate.setDate(startDate.getDate() + 1);
        }

        return elem;
      })}

      {times.map((time: string, timeIndex: number) => {
        let now: number = -1;
        if (isTodayVisible) {
          now = today.getHours() + 1;
        }

        return (
          <React.Fragment
            key={ timeIndex }
          >
            <p
              className={ `week-page__time ${timeIndex === now ? 'week-page__time--now' : ''}` }
              data-testid="week-page-time"
            >{ time }</p>

            {titles.slice(0, -1).map((title: string, titleIndex: number) => {
              const cellClassList: string[] = ['week-page__cell'];
              if (timeIndex === now) {
                cellClassList.push('week-page__cell--now');
              }
              if (titleIndex > 4) {
                cellClassList.push('week-page__cell--weekend');
              }

              return (
                <div
                  key={ titleIndex }
                  className={ cellClassList.join(' ') }
                  data-testid="week-page-title-cell"
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
