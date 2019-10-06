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
 * Day page component.
 */
export class DayPage extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div
        className="day-page"
      >
        <p>Day Page!</p>
      </div>
    );
  }
}
