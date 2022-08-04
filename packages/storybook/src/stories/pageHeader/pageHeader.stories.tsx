import PageHeader from '../../../../pageHeader/src/pageHeader';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: PageHeader,
  title: 'Design System/PageHeader',
};

export const padrao = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div>
      <ThemeProvider>
        <PageHeader titulo="teste" />
      </ThemeProvider>
    </div>
    <div>
      <ThemeProvider>
        <PageHeader
          titulo="teste"
          button={{
            children: 'teste',
            startIcon: <>icon</>,
          }}
          style={{
            backgroundColor: '#f5f5f5',
          }}
        />
      </ThemeProvider>
    </div>
    <div>
      <ThemeProvider>
        <PageHeader
          titulo="teste"
          button={{
            children: 'teste',
            startIcon: <>icon</>,
            variant: 'outlined',
          }}
          right={<>espaço livre</>}
        />
      </ThemeProvider>
    </div>
    <div>
      <ThemeProvider>
        <PageHeader
          titulo="teste"
          button={{
            children: 'teste',
            startIcon: <>icon</>,
          }}
          style={{
            backgroundColor: '#f5f5f5',
          }}
        />
      </ThemeProvider>
    </div>
  </div>
);
