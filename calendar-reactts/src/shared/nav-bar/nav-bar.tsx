import * as React from 'react';

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
export class NavBar extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <header className="nav-bar">
        <div>
          <button onClick={ this.props.calendars } className="button button--big">Calendars</button>
          <button onClick={ this.props.add } className="button button--big">+</button>
        </div>
        <div className="nav-bar__spacer"/>
        <Navigation/>
        <div className="nav-bar__spacer"/>
        <Search search={ this.props.search }/>
      </header>
    );
  }
}
