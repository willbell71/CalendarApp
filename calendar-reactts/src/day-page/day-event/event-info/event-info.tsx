import * as React from 'react';

import './styles.scss';

/**
 * Component state.
 * @property {boolean} open - component is open.
 */
export type TState = {
  open: boolean;
};

/**
 * Event Info component.
 */
export class EventInfo extends React.Component<{}, TState> {
  // @member {TState} state - component state.
  public state: TState = {
    open: false
  };

  /**
   * Render open component.
   * @return {JSX.Element} render.
   */
  private renderOpen(): JSX.Element {
    return (
      <div>
        <input type="text" placeholder="Add Notes"/>
        <input type="text" placeholder="Add URL"/>
        <input type="text" placeholder="Add Attachment..."/>
      </div>
    );
  }

  /**
   * Render closed component.
   * @return {JSX.Element} render.
   */
  private renderClosed(): JSX.Element {
    return (
      <div>
        <p>Add Notes, URL or Attachments</p>
      </div>
    );
  }

  /**
   * Toggle control between open and closed state.
   */
  private toggle: () => void = (): void => {
    // toggle open state
    this.setState((state: TState) => ({
      open: !state.open
    }));
  };

  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div onClick={ this.toggle }>
        { this.state.open ? this.renderOpen() : this.renderClosed() }
      </div>
    );
  }
}
