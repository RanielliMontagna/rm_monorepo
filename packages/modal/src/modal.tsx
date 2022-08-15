import { FC } from 'react';
import { MdClose } from 'react-icons/md';

import { Button } from '../../button/src';

import * as styled from './modal.styles';
import { ModalProps } from './modal.types';

const Modal: FC<ModalProps> = ({ titulo, size, onClose, children, open, footer }) => {
  if (!open) return null;

  return (
    <styled.Backdrop>
      <styled.Modal size={size || 'md'}>
        <styled.ModalHeader>
          <styled.TituloModal>{titulo}</styled.TituloModal>
          <styled.DivBotaoFechar onClick={onClose}>
            <MdClose size={32} />
          </styled.DivBotaoFechar>
        </styled.ModalHeader>
        <styled.Conteudo>{children}</styled.Conteudo>
        {footer && (
          <styled.Footer>
            <div>{footer.extra}</div>
            {(footer?.botaoPrimario || footer?.botaoSecundario) && (
              <styled.BotoesPrincipais>
                {footer.botaoSecundario && (
                  <div style={{ marginLeft: '16px' }}>
                    <Button {...footer.botaoSecundario} />
                  </div>
                )}
                {footer.botaoPrimario && (
                  <div style={{ marginLeft: '16px' }}>
                    <Button type="submit" {...footer.botaoPrimario} />
                  </div>
                )}
              </styled.BotoesPrincipais>
            )}
          </styled.Footer>
        )}
      </styled.Modal>
    </styled.Backdrop>
  );
};

export default Modal;
