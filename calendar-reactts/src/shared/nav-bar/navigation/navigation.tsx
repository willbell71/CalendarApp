import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

/**
 * Navigation component.
 */
export class Navigation extends React.Component {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div>
        <Link
          to="/day"
          className="button button--big"
        >Day</Link>

        <Link
          to="/week"
          className="button button--big"
        >Week</Link>

        <Link
          to="/month"
          className="button button--big"
        >Month</Link>

        <Link
          to="/year"
          className="button button--big"
        >Year</Link>
      </div>
    );
  }
}
