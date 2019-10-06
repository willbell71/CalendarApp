import * as React from 'react';

import './styles.scss';

/**
 * Component props.
 * @property {(term: string) => void} search - callback when search term changes.
 */
export type TProps = {
  search: (term: string) => void;
};

/**
 * Search component.
 */
export class Search extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div
        className="search"
      >
        <i
          className="fas fa-search"
        />
        <input
          className="search__input"
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}
