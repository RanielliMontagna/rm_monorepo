import React from 'react';

export type FontWeight = 'slim' | 'normal' | 'bold';
export type TypographySizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface TypographyProps {
  size?: TypographySizes;
  weight?: FontWeight;
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}
