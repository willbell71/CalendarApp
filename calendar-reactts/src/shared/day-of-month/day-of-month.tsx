import React, { FC } from 'react';

/**
 * Component properties.
 * @property {Date} data - date to display.
 */
export type TProps = {
  date: Date;
};

/**
 * Day of month component.
 */
export const DayOfMonth: FC<TProps> = ({ date }: TProps): JSX.Element => (
  <>{ date.getDate() }</>
);
