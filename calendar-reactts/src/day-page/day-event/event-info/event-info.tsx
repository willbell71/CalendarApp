import React from 'react';

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
      <div
        className="event-info__open"
        data-testid="event-info-open"
      >
        <input
          className="event-info__open-event-input"
          type="text"
          placeholder="Add Notes"
        />
        <input
          className="event-info__open-event-input"
          type="text"
          placeholder="Add URL"
        />
        <input
          className="event-info__open-event-input"
          type="text"
          placeholder="Add Attachment..."
        />
      </div>
    );
  }

  /**
   * Render closed component.
   * @return {JSX.Element} render.
   */
  private renderClosed(): JSX.Element {
    return (
      <div data-testid="event-info-closed">
        <p className="event-info__closed-caption">Add Notes, URL or Attachments</p>
      </div>
    );
  }

  /**
   * Toggle control between open and closed state.
   */
  private toggle: () => void = (): void => {
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
      <div className="event-info" onClick={ this.toggle } data-testid="event-info">
        { this.state.open ? this.renderOpen() : this.renderClosed() }
      </div>
    );
  }
}
