import { PropsWithChildren } from "react";

export interface IFontes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ICores {
  primaria: string;
  secundaria: string;
  terciaria: string;
}

export interface ICoresUtilitarias {
  success: string;
  warning: string;
  danger: string;
}

export interface IThemeProvider extends PropsWithChildren {
  theme?: {
    fontes: IFontes;
    theme: {
      cores: ICores;
      coresUtilitarias: ICoresUtilitarias;
      coresExtras: Object;
    };
  };
}
