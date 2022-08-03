import * as React from 'react';

import { TypographySpan } from './typography.styles';
import type { TypographyProps } from './typography.types';

export const Typography: React.FC<TypographyProps> = ({ children, style, className, ...props }) => {
  return (
    <TypographySpan style={style} className={`typography ${className}`} {...props}>
      {children}
    </TypographySpan>
  );
};
