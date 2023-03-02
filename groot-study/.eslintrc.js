module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'], // 절대경로 노드 설정
        paths: ['src/*'], // 절대경로 노드 설정
      },
      typescript: {},
    },
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never', json: 'never' },
    ],
    'react/no-unstable-nested-components': 'off', // 컴포넌트 분리
    camelcase: 'off',
    'react/function-component-definition': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'no-undef': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        printWidth: 120,
        singleQuote: true,
        useTabs: false,
      },
    ],
    // include: ['src'],
    // exclude: ['node_modules/**', 'build/**', 'coverage/**'],

    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'no-console': 'off',
    indent: 'off', // tab 공백 에러,
    'implicit-arrow-linebreak': 0,
    'import/no-unresolved': [2, { caseSensitive: false }], // import 절대경 지정 문제('https://xxxxersuy.com/19'),
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'operator-linebreak': 0,
    'react/prop-types': ['off'], // https://forhjy.medium.com/react-solution-for-children-is-missing-in-props-validation-eslint-react-prop-types-2e11bc6043c7,
    'object-curly-newline': 0, // https://runebook.dev/ko/docs/eslint/rules/object-curly-newline,
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'no-confusing-arrow': 0,
    'arrow-parens': [0, 'ban-single-arg-parens', 'error', 'as-needed'],
    'no-underscore-dangle': 0,
    'spaced-comment': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 'off',
    'function-paren-newline': 'off',
    'jsx-a11y/media-has-caption': [
      2,
      {
        audio: ['Audio'],
        video: ['Video'],
        track: ['Track'],
      },
    ],
    'no-unused-vars': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false, return: true }],
  },
};
