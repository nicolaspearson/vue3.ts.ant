module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
      packageJson: 'package.json',
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
};
