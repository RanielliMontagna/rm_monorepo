import { Button } from '../../../../button/src';
import ThemeProvider from '../../../../themeProvider/src/themeProvider';

export default {
  component: Button,
  title: 'Design System/Button',
};

export const padrao = () => (
  <ThemeProvider>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="sm" variant="dashed">
          SM/DASHED
        </Button>
        <Button size="sm" variant="naked">
          SM/NAKED
        </Button>
        <Button size="sm" variant="normal">
          SM/NORMAL
        </Button>
        <Button size="sm" variant="outlined">
          SM/OUTLINED
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="md" variant="dashed">
          MD/DASHED
        </Button>
        <Button size="md" variant="naked">
          MD/NAKED
        </Button>
        <Button size="md" variant="normal">
          MD/NORMAL
        </Button>
        <Button size="md" variant="outlined">
          MD/OUTLINED
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="lg" variant="dashed">
          LG/DASHED
        </Button>
        <Button size="lg" variant="naked">
          LG/NAKED
        </Button>
        <Button size="lg" variant="normal">
          LG/NORMAL
        </Button>
        <Button size="lg" variant="outlined">
          LG/OUTLINED
        </Button>
      </div>
    </div>
  </ThemeProvider>
);

export const comIcone = () => (
  <ThemeProvider>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="sm" variant="dashed" startIcon={<>⬇️</>}>
          SM/DASHED
        </Button>
        <Button size="sm" variant="naked" startIcon={<>⬇️</>}>
          SM/NAKED
        </Button>
        <Button size="sm" variant="normal" startIcon={<>⬇️</>}>
          SM/NORMAL
        </Button>
        <Button size="sm" variant="outlined" startIcon={<>⬇️</>}>
          SM/OUTLINED
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="md" variant="dashed" startIcon={<>⬇️</>}>
          MD/DASHED
        </Button>
        <Button size="md" variant="naked" startIcon={<>⬇️</>}>
          MD/NAKED
        </Button>
        <Button size="md" variant="normal" startIcon={<>⬇️</>}>
          MD/NORMAL
        </Button>
        <Button size="md" variant="outlined" startIcon={<>⬇️</>}>
          MD/OUTLINED
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="lg" variant="dashed" startIcon={<>⬇️</>}>
          LG/DASHED
        </Button>
        <Button size="lg" variant="naked" startIcon={<>⬇️</>}>
          LG/NAKED
        </Button>
        <Button size="lg" variant="normal" startIcon={<>⬇️</>}>
          LG/NORMAL
        </Button>
        <Button size="lg" variant="outlined" startIcon={<>⬇️</>}>
          LG/OUTLINED
        </Button>
      </div>
    </div>
  </ThemeProvider>
);

export const fullWitdh = () => (
  <ThemeProvider>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="sm" variant="dashed" fullWidth>
          SM/DASHED
        </Button>
        <Button size="sm" variant="naked" fullWidth>
          SM/NAKED
        </Button>
        <Button size="sm" variant="normal" fullWidth>
          SM/NORMAL
        </Button>
        <Button size="sm" variant="outlined" fullWidth>
          SM/OUTLINED
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="md" variant="dashed" fullWidth>
          MD/DASHED
        </Button>
        <Button size="md" variant="naked" fullWidth>
          MD/NAKED
        </Button>
        <Button size="md" variant="normal" fullWidth>
          MD/NORMAL
        </Button>
        <Button size="md" variant="outlined" fullWidth>
          MD/OUTLINED
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button size="lg" variant="dashed" fullWidth>
          LG/DASHED
        </Button>
        <Button size="lg" variant="naked" fullWidth>
          LG/NAKED
        </Button>
        <Button size="lg" variant="normal" fullWidth>
          LG/NORMAL
        </Button>
        <Button size="lg" variant="outlined" fullWidth>
          LG/OUTLINED
        </Button>
      </div>
    </div>
  </ThemeProvider>
);
