import * as React from 'react';

/**
 * Component properties.
 * @property {Date} data - date to display.
 */
export type TProps = {
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
    // list of months of the year
    const months: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return (
      <>{ months[this.props.date.getMonth()] }</>
    );
  }
}
