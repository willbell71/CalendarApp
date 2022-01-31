import React, { FC } from 'react';

import { Navigation } from './navigation/navigation';
import { Search } from './search/search';

import './styles.scss';

/**
 * Component props.
 * @property {() => void} calendars - calendars click handler.
 * @property {() => void} add - add calendar click handler.
 * @property {(term: string) => void} search - search handler.
 */
export type TProps = {
  calendars: () => void;
  add: () => void;
  search: (term: string) => void;
};

/**
 * Nav Bar component.
 */
export const NavBar: FC<TProps> = ({ calendars, add, search }: TProps): JSX.Element => (
  <header
    className="nav-bar"
  >
    <div className="nav-bar__control-group">
      <button
        onClick={ calendars }
        className="button button--big"
        data-testid="nav-bar-button-calendars"
      >
        Calendars
      </button>

      <button
        onClick={ add }
        className="button button--big"
        data-testid="nav-bar-button-add"
      >
        +
      </button>
    </div>

    <div className="nav-bar__spacer"/>

    <Navigation/>

    <div
      className="nav-bar__spacer"
    />

    <Search
      search={ search }
      data-testid="nav-bar-search"
    />
  </header>
);
