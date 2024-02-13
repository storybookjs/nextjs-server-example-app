import type { StorybookConfig } from '@storybook/nextjs-server';

const config: StorybookConfig = {
  stories: ['../src/page-stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { docs: false } },
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs-server',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  staticDirs: ['../public'],
};
export default config;
