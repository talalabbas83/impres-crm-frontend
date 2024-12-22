/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended-type-checked'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  ignorePatterns: ['**/*.html'],
  rules: {
    // base
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // end
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'warn', // Lower severity
    '@typescript-eslint/no-unsafe-assignment': 'off', // Disable unsafe checks
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'unicorn/prevent-abbreviations': 'off', // Disable abbreviations rule
    'sonarjs/no-duplicate-string': 'warn', // Optional: Lower severity
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'sonarjs/no-duplicate-string': 'off',




    // typescript
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',

    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports'
      }
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: { attributes: false }
      }
    ]
    // end
  }
};
