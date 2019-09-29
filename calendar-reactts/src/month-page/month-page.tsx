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
 * Month page component.
 */
export class MonthPage extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div className="month-page">
        <p>Month Page!</p>
      </div>
    );
  }
}
