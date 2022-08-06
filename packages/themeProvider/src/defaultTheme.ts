// Cores Utilitarias
export const success = '#50D100';
export const warning = '#F6A500';
export const danger = '#E52A08';

// Cores Neutras
export const cinzaClaro = '#8B8B8B';
export const cinzaEscuro = '#575757';

// Tamanho de fontes
export const tamanhoFonte = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

export const defaultTheme = {
  fontes: tamanhoFonte,
  cores: {
    primaria: '#384B78',
    secundaria: '#22252C',
    terciaria: '#FFFFFF',
  },
  coresUtilitarias: { success, warning, danger },
  coresExtras: {
    branco: '#FFFFFF',
    preto: '#22252C',
    cinzaClaro,
    cinzaEscuro,
  },
  modal: {
    background: '#FFFFFF',
    foreground: '#22252C',
  },
  menu: {
    background: '#FFFFFF',
    foreground: '#22252C',
  },
};
