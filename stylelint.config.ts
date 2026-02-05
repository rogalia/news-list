import type { StylelintConfig } from 'stylelint';

const config: StylelintConfig = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    "selector-class-pattern": "^[a-z0-9-]+(__[a-z0-9-]+)?(--[a-z0-9-]+)*$"
  }
};

export default config;