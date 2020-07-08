module.exports = {
    clearMocks: true,
    coverageDirectory: './stats/',
    coverageReporters: ['json', 'lcov', 'text', 'html'],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    },
    globals: {
      appInsights: { trackEvent: () => {} }
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
    },
    resetMocks: true,
    resetModules: true,
    restoreMocks: true,
    testMatch: ['**/*.test.js'],
    testPathIgnorePatterns: ['<rootDir>/src/automation/'],
    testURL: 'http://localhost/',
    verbose: true
  };