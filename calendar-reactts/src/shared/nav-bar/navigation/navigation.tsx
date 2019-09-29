import * as React from 'react';

import './styles.scss';

/**
 * Component props.
 * @property {() => void} day - day click handler.
 * @property {() => void} week - week click handler.
 * @property {() => void} month - month click handler.
 * @property {() => void} year - year click handler.
 */
export type TProps = {
  day: () => void;
  week: () => void;
  month: () => void;
  year: () => void;
};

/**
 * Navigation component.
 */
export class Navigation extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div>
        <button onClick={ this.props.day } className="button button--big">Day</button>
        <button onClick={ this.props.week } className="button button--big">Week</button>
        <button onClick={ this.props.month } className="button button--big">Month</button>
        <button onClick={ this.props.year } className="button button--big">Year</button>
      </div>
    );
  }
}
