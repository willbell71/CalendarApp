import React from 'react';

import { EPeriod } from '../../EPeriod';

import './styles.scss';

/**
 * Component properties.
 * @property {(EPeriod) => void} prev - previous click handler.
 * @property {() => void} today - today click handler.
 * @property {(EPeriod) => void} next - next click handler.
 * @property {EPeriod} period - period for date control.
 */
export type TProps = {
  prev: (period: EPeriod) => void;
  today: () => void;
  next: (period: EPeriod) => void;
  period: EPeriod;
};

/**
 * Date Control component.
 */
export class DateControl extends React.Component<TProps> {
  /**
   * Previous date.
   */
  private prevDate: () => void = (): void => {
    this.props.prev(this.props.period);
  };

  /**
   * Nest date.
   */
  private nextDate: () => void = (): void => {
    this.props.next(this.props.period);
  };

  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <div className="date-control__control-group">
        <button
          className="button"
          onClick={ this.prevDate }
          data-testid="date-control-button-prev"
        >
          &lt;
        </button>

        <button
          className="button"
          onClick={ this.props.today }
          data-testid="date-control-button-today"
        >
          Today
        </button>

        <button
          className="button"
          onClick={ this.nextDate }
          data-testid="date-control-button-next"
        >
          &gt;
        </button>
      </div>
    );
  }
}
