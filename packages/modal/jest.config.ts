import jestRootConfig from '../../jest.root';

export default {
  ...jestRootConfig,
  setupFilesAfterEnv: ['<rootDir>/../../test/setupTests.ts'],
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 100,
      lines: 85,
      statements: 90,
    },
  },
};
