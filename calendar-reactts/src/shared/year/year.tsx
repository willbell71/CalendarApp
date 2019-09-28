import * as React from 'react';

/**
 * Component properties.
 * @property {Date} data - date to display.
 */
export type TProps = {
  date: Date;
};

/**
 * Year component.
 */
export class Year extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <>{ this.props.date.getFullYear() }</>
    );
  }
}
