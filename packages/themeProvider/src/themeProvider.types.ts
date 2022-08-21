import { PropsWithChildren } from 'react';

export type IFontes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface ICoresPrincipais {
  primaria?: string;
  secundaria?: string;
  terciaria?: string;
}

export interface ICoresUtilitarias {
  success?: string;
  warning?: string;
  danger?: string;
}

export type ICores = ICoresPrincipais | ICoresUtilitarias;
export interface IThemeProvider
  extends PropsWithChildren<{
    theme?: {
      fontes?: IFontes;
      cores?: ICoresPrincipais;
      coresUtilitarias?: ICoresUtilitarias;
      coresExtras?: Object;
      modal?: {
        background?: string;
        foreground?: string;
      };
      menu?: {
        background?: string;
        foreground?: string;
      };
      appBar?: {
        background?: string;
        foreground?: string;
      };
    };
  }> {}
