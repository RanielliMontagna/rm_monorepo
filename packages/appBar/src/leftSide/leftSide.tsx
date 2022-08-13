import React, { memo } from 'react';

const LeftSide = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>{children}</div>;
};

export default memo(LeftSide);
