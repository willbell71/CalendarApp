import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

/**
 * Navigation component.
 */
export const Navigation: FC = (): JSX.Element => (
  <div className="navigation__control-group">
    <Link
      to="/day"
      className="button button--big"
      data-testid="navigation-day"
    >
      Day
    </Link>

    <Link
      to="/week"
      className="button button--big"
      data-testid="navigation-week"
    >
      Week
    </Link>

    <Link
      to="/month"
      className="button button--big"
      data-testid="navigation-month"
    >
      Month
    </Link>

    <Link
      to="/year"
      className="button button--big"
      data-testid="navigation-year"
    >
      Year
    </Link>
  </div>
);
