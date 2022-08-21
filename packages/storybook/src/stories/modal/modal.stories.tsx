import Modal from '../../../../modal/src/modal';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: Modal,
  title: 'Design System/Modal',
};

export const modal = () => (
  <ThemeProvider
    theme={{
      cores: {
        primaria: '#2c2c2c',
        secundaria: '#fff',
        terciaria: '#2c2c2c',
      },
    }}
  >
    <Modal
      open={true}
      onClose={() => {
        //
      }}
      titulo="teste"
      footer={{
        botaoPrimario: { children: 'botao primario' },
        botaoSecundario: { children: 'botao secundario', variant: 'outlined' },
      }}
    >
      <div>div dentro do Modal</div>
    </Modal>
  </ThemeProvider>
);

export const sm = () => (
  <ThemeProvider>
    <Modal
      open={true}
      onClose={() => {
        //
      }}
      size="sm"
      titulo="teste"
    >
      <div>div dentro do Modal</div>
    </Modal>
  </ThemeProvider>
);

export const md = () => (
  <ThemeProvider>
    <Modal
      open={true}
      onClose={() => {
        //
      }}
      size="md"
      titulo="teste"
      footer={{
        botaoPrimario: { children: 'botao primario' },
        botaoSecundario: { children: 'botao secundario', variant: 'outlined' },
      }}
    >
      <div>div dentro do Modal</div>
    </Modal>
  </ThemeProvider>
);

export const lg = () => (
  <ThemeProvider>
    <Modal
      open={true}
      onClose={() => {
        //
      }}
      size="lg"
      titulo="teste"
      footer={{
        botaoPrimario: { children: 'botao primario' },
        botaoSecundario: { children: 'botao secundario', variant: 'outlined' },
      }}
    >
      <div>div dentro do Modal</div>
    </Modal>
  </ThemeProvider>
);
