import * as React from 'react';

import './styles.scss';

/**
 * Add Popup component.
 */
export class AddPopup extends React.Component {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    return (
      <section className="add-popup">
        <label htmlFor="add-popup-input"><h3 className="add-popup__title">Create Quick Event</h3></label>
        <input id="add-popup-input" className="add-popup__input" type="text" placeholder="Film at 7pm on Friday"/>
      </section>
    );
  }
}
