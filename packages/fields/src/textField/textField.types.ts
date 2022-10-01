import type { TextFieldProps as TextFieldPropsMui } from '@mui/material';
import type { ControllerProps } from 'react-hook-form';

type ControllerTextField = Omit<ControllerProps, 'render' | 'control'>;

export type Masks = 'cpf' | 'cnpj' | 'cpfCnpj' | 'cep' | 'telefone' | 'decimal' | 'numero' | 'valor';

export type TextFieldProps = TextFieldPropsMui &
  ControllerTextField & {
    mask?: Masks;
  };
