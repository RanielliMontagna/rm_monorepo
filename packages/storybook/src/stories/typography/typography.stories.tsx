import { Typography } from '../../../../typography/src';
import { ThemeProvider } from '../../../../themeProvider/src';

export default {
  component: Typography,
  title: 'Design System/Typography',
};

export const padrao = () => (
  <ThemeProvider>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Typography weight="slim" size="xs">
          XS/SLIM
        </Typography>
        <Typography weight="normal" size="xs">
          XS/NORMAL
        </Typography>
        <Typography weight="bold" size="xs">
          XS/BOLD
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Typography weight="slim" size="sm">
          SM/SLIM
        </Typography>
        <Typography weight="normal" size="sm">
          SM/NORMAL
        </Typography>
        <Typography weight="bold" size="sm">
          SM/BOLD
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Typography weight="slim" size="md">
          MD/SLIM
        </Typography>
        <Typography weight="normal" size="md">
          MD/NORMAL
        </Typography>
        <Typography weight="bold" size="md">
          MD/BOLD
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Typography weight="slim" size="lg">
          LG/SLIM
        </Typography>
        <Typography weight="normal" size="lg">
          LG/NORMAL
        </Typography>
        <Typography weight="bold" size="lg">
          LG/BOLD
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Typography weight="slim" size="xl">
          XL/SLIM
        </Typography>
        <Typography weight="normal" size="xl">
          XL/NORMAL
        </Typography>
        <Typography weight="bold" size="xl">
          XL/BOLD
        </Typography>
      </div>
    </div>
  </ThemeProvider>
);
