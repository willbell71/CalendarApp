import * as React from 'react';

import './styles.scss';

/**
 * Nav Bar component.
 */
export class NavBar extends React.Component {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <header className="nav-bar"/>
    );
  }
}
