import React from 'react';
import * as styled from './button.styles';

import { ButtonProps } from './button.types';
import { Typography } from '../../typography/src';

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  size,
  fullWidth,
  variant,
  startIcon,
  onClick,
  type,
  hide,
}) => {
  if (!hide)
    return (
      <styled.Button
        color={color ?? 'secondary'}
        fullWidth={fullWidth ?? false}
        size={size ?? 'md'}
        className={variant ?? 'normal'}
        onClick={onClick}
        type={type ?? 'button'}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginRight: '6px' }}>
          {startIcon}
        </div>
        <div style={{ whiteSpace: 'nowrap', flex: 1 }}>
          <Typography weight="bold">{children}</Typography>
        </div>
      </styled.Button>
    );

  return null;
};

export default Button;
