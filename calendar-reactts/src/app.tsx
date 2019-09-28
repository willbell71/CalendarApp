import * as React from 'react';
import * as reactDOM from 'react-dom';

import { NavBar } from './shared/nav-bar/nav-bar';

import './styles.scss';
import { TitleBar } from './shared/title-bar/title-bar';

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
      <>
        <NavBar/>
        <TitleBar
          date={ new Date() }
          showDate={ true }
          showMonth={ true }
          showYear={ true }
          showDay={ true }
          prev={ () => {} }
          today={ () => {} }
          next={ () => {} }
        />
      </>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
