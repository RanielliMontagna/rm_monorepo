import { SearchField } from '../../../../fields/src/searchField/searchField';
import throttle from 'lodash.throttle';
import { ThemeProvider } from '../../../../themeProvider/src';

export default {
  component: SearchField,
  title: 'Design System/Fields/SearchField',
};

export const numberField = () => {
  const handleSearch = throttle(
    async (term: string) => {
      // eslint-disable-next-line no-console
      console.log(term);
    },
    500,
    { leading: false }
  );

  return (
    <ThemeProvider>
      <SearchField handleSearch={handleSearch} placeholder="" />
    </ThemeProvider>
  );
};
