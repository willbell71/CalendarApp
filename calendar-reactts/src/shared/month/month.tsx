import * as React from 'react';

import './styles.scss';

/**
 * Component properties.
 * @property {Date} data - date to display.
 */
export type TProps = {
  date: Date;
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
    const days: string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    // get the start of the month
    const startOfMonth: Date = new Date(this.props.date.getFullYear(), this.props.date.getMonth(), 1);
    // rewind to put monday at start of week
    let dayOfWeek: number = startOfMonth.getDay();
    if (!dayOfWeek) {
      dayOfWeek = 7;
    }
    dayOfWeek--;

    // build first date visible in calendar
    const calendarDate: Date = new Date(this.props.date.getFullYear(), this.props.date.getMonth(), 1 - dayOfWeek);

    const dates: string[] = [...days, ...days, ...days, ...days, ...days, ...days];

    return (
      <div className="month">
        {days.map((day: string, index: number) => (<p key={ index } className="month__cell">{ day }</p>))}
        {dates.map((date: string, index: number) => {
          const classes: string[] = ['month__cell'];
          if (date === 'S') {
            classes.push('month__cell--weekend');
          }
          if (calendarDate.getMonth() !== this.props.date.getMonth()) {
            classes.push('month__cell--dead');
          }
          const elem: JSX.Element = (<p key={ index } className={ classes.join(' ') }>{ calendarDate.getDate() }</p>);

          calendarDate.setDate(calendarDate.getDate() + 1);

          return elem;
        })}
      </div>
    );
  }
}
