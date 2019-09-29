import * as React from 'react';

import './styles.scss';

/**
 * Component properties.
 * @property {() => void} prev - previous click handler.
 * @property {() => void} today - today click handler.
 * @property {() => void} next - next click handler.
 */
export type TProps = {
  prev: () => void;
  today: () => void;
  next: () => void;
};

/**
 * Date Control component.
 */
export class DateControl extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div>
        <button className="button" onClick={ this.props.prev }>&lt;</button>
        <button className="button" onClick={ this.props.today }>Today</button>
        <button className="button" onClick={ this.props.next }>&gt;</button>
      </div>
    );
  }
}
