import * as React from 'react';

import { TypographySpan } from './typography.styles';
import type { TypographyProps } from './typography.types';

const Typography: React.FC<TypographyProps> = ({ children, style, className, ...props }) => {
  return (
    <TypographySpan style={style} className={`typography ${className}`} {...props}>
      {children}
    </TypographySpan>
  );
};

export default React.memo(Typography);
