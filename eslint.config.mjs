import eslintPluginJest from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      globals: {
        jest: 'readonly',
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      // Jest rules
      'jest/consistent-test-it': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',

      // General ESLint rules
      'no-console': 'off',  // Disables the no-console rule
      'no-unused-vars': 'warn',
      'eqeqeq': 'error',
      'curly': 'error',
    },
  },
];
