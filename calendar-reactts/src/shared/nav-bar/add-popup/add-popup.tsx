import React, { FC } from 'react';

import './styles.scss';

/**
 * Add Popup component.
 */
export const AddPopup: FC = (): JSX.Element => (
  <section className="add-popup">
    <label htmlFor="add-popup-input"><h3 className="add-popup__title">Create Quick Event</h3></label>
    <input id="add-popup-input" className="add-popup__input" type="text" placeholder="Film at 7pm on Friday"/>
  </section>
);
