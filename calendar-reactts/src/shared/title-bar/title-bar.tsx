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
 * Title Bar component.
 */
export class TitleBar extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <h1>{ this.props.date }</h1>
    );
  }
}
