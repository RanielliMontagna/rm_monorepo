import jestRootConfig from '../../jest.root';

export default {
  ...jestRootConfig,
  setupFilesAfterEnv: ['<rootDir>/../../test/setupTests.ts'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.styles.{ts,tsx}', '!src/subMenu/*', '!src/item/*'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
