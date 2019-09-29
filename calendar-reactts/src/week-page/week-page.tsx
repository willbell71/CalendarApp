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
 * Week page component.
 */
export class WeekPage extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div className="week-page">
        <p>Week Page!</p>
      </div>
    );
  }
}
