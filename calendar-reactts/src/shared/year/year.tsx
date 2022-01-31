import React, { FC } from 'react';

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
export const Year: FC<TProps> = ({ date }: TProps): JSX.Element => (
  <>{ date.getFullYear() }</>
);
