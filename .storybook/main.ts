import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-styling',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-mdx-gfm',
    'storybook-addon-designs',
    '@storybook/addon-highlight',
    'storybook-css-modules',
    'storybook-addon-jarle-monaco',
    'storybook-addon-swc',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },

    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  refs: {
    'package-name': {
      disable: true,
    },
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true,
  },
  logLevel: 'debug',
};
export default config;

export const previewAnnotations: StorybookConfig['previewAnnotations'] = (
  entry = []
) => [...entry, require.resolve('@storybook/nextjs/preview.js')];
