import React from 'react';

import { DrawerHeader } from '../drawer.styles';
import { IDrawerHeader } from '../drawer.types';

const Header = ({ children, ...rest }: IDrawerHeader) => {
  return <DrawerHeader {...rest}>{children}</DrawerHeader>;
};

export default React.memo(Header);
