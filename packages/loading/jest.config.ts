import jestRootConfig from '../../jest.root';

export default {
  ...jestRootConfig,
  setupFilesAfterEnv: ['<rootDir>/../../test/setupTests.ts'],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
