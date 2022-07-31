import React from 'react';
import type { IFontes } from './../../themeProvider/src/themeProvider.types';
export type FontWeight = 'slim' | 'normal' | 'bold';

export interface TypographyProps {
  size?: IFontes;
  weight?: FontWeight;
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}
