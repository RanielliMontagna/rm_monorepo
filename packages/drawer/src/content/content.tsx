import React from 'react';

import { DrawerContent } from '../drawer.styles';
import type { IDrawerContent } from '../drawer.types';

const Content = ({ children, color }: IDrawerContent) => {
  return <DrawerContent color={color}>{children}</DrawerContent>;
};

export default React.memo(Content);
