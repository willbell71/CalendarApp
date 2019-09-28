import * as React from 'react';

/**
 * Component properties.
 * @property {Date} data - date to display.
 */
export type TProps = {
  date: Date;
};

/**
 * Day of the week component.
 */
export class DayOfWeek extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    // list of days of the week
    const days: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    return (
      <>{ days[this.props.date.getDay()] }</>
    );
  }
}
