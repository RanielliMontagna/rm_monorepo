import * as React from 'react';
import { DivAppBar } from './appBar.styles';
import type { IAppBar } from './appBar.types';

import RightSide from './rightSide/rightSide';
import LeftSide from './leftSide/leftSide';

const AppBarWithoutMemo: React.FC<IAppBar> = ({ children }) => {
  const _leftSide = React.useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.Children?.toArray(children)?.filter((child: any) => child?.type === LeftSide);
  }, [children]);

  const _rightSide = React.useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.Children?.toArray(children)?.find((child: any) => child?.type === RightSide);
  }, [children]);

  return (
    <DivAppBar>
      {_leftSide}
      {_rightSide}
    </DivAppBar>
  );
};

const AppBar = React.memo(AppBarWithoutMemo) as React.NamedExoticComponent<IAppBar> & {
  RightSide: React.ComponentType<React.ComponentProps<typeof RightSide>>;
  LeftSide: React.ComponentType<React.ComponentProps<typeof LeftSide>>;
};

AppBar.RightSide = RightSide;
AppBar.LeftSide = LeftSide;

export default AppBar;
