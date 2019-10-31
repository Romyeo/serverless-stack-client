import { FC } from 'react';

export default interface IRoute {
  path: string;
  name: string;
  hidden?: boolean;
  component?: FC<any>;
}
