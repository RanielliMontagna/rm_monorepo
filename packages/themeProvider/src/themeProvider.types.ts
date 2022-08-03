import { PropsWithChildren } from 'react';

export type IFontes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ICoresPrincipais {
  primaria: string;
  secundaria: string;
  terciaria: string;
}

export interface ICoresUtilitarias {
  success: string;
  warning: string;
  danger: string;
}

export type ICores = ICoresPrincipais | ICoresUtilitarias;
export interface IThemeProvider
  extends PropsWithChildren<{
    theme?: {
      fontes?: IFontes;
      cores: ICoresPrincipais;
      coresUtilitarias?: ICoresUtilitarias;
      coresExtras?: Object;
    };
  }> {}
