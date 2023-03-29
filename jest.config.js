module.exports = {
    testEnvironment: 'node',
    testMatch: [
      '**/tests.unit.js',
      '**/tests/tests.integration.js'
    ],
    moduleFileExtensions: ['js'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    }
  };