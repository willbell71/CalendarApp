import * as React from 'react';
import * as reactDOM from 'react-dom';

import { NavBar } from './shared/nav-bar/nav-bar';

import './styles.scss';

/**
 * App component.
 */
class App extends React.Component {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <NavBar/>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
