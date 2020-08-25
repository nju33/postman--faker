/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:testing-library/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/standard'
  ],
  plugins: [
    'typescript-sort-keys',
    'prettier',
    'testing-library',
    'simple-import-sort',
    'sort-destructure-keys',
    'tsdoc'
  ],
  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']]
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'tsdoc/syntax': 'warn',
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error'
      }
    },
    {
      files: ['*.js', '*.ts'],
      rules: {
        'sort-destructure-keys/sort-destructure-keys': [
          'error',
          { caseSensitive: false }
        ]
      }
    }
  ]
}
