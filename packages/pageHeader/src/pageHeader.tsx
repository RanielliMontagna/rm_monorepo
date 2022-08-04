import { FC } from 'react';
import type { PageHeaderProps } from './pageHeader.types';

import { MdAdd } from 'react-icons/md';
import { Typography } from '../../typography/src';
import { Button } from '../../button/src';

import * as styled from './pageHeader.styles';

export const PageHeader: FC<PageHeaderProps> = ({ titulo, button, right, style }) => {
  return (
    <styled.DivPageHeader style={style}>
      <div className="divTitulo">
        <Typography weight="bold" size="xl">
          {titulo}
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {right}
        {button && (
          <>
            <div className="botaoWeb">
              <Button {...button}>{button.children}</Button>
            </div>
            <div className="botaoMobile">
              <button onClick={button.onClick}>
                <MdAdd size={32} />
              </button>
            </div>
          </>
        )}
      </div>
    </styled.DivPageHeader>
  );
};

export default PageHeader;
