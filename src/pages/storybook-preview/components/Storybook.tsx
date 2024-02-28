import React from 'react';
import { composeConfigs } from '@storybook/preview-api';
import { Preview } from '@storybook/nextjs-server/pages';

const getProjectAnnotations = async () => {
  const projectAnnotations0 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server/node_modules/.pnpm/@storybook+react@8.0.0-beta.5_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@storybook/react/dist/entry-preview.mjs'
  );
  const projectAnnotations1 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server/node_modules/.pnpm/@storybook+react@8.0.0-beta.5_react-dom@18.2.0_react@18.2.0_typescript@5.3.3/node_modules/@storybook/react/dist/entry-preview-docs.mjs'
  );
  const projectAnnotations2 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/node_modules/.pnpm/@storybook+addon-links@8.0.0-beta.5_react@18.2.0/node_modules/@storybook/addon-links/dist/preview.js'
  );
  const projectAnnotations3 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/node_modules/.pnpm/@storybook+addon-essentials@8.0.0-beta.5_@types+react@18.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/actions/preview.js'
  );
  const projectAnnotations4 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/node_modules/.pnpm/@storybook+addon-essentials@8.0.0-beta.5_@types+react@18.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js'
  );
  const projectAnnotations5 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/node_modules/.pnpm/@storybook+addon-essentials@8.0.0-beta.5_@types+react@18.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/viewport/preview.js'
  );
  const projectAnnotations6 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/node_modules/.pnpm/@storybook+addon-essentials@8.0.0-beta.5_@types+react@18.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/measure/preview.js'
  );
  const projectAnnotations7 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/node_modules/.pnpm/@storybook+addon-essentials@8.0.0-beta.5_@types+react@18.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/outline/preview.js'
  );
  const projectAnnotations8 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/node_modules/.pnpm/@storybook+addon-essentials@8.0.0-beta.5_@types+react@18.0.0_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-essentials/dist/highlight/preview.js'
  );
  const projectAnnotations10 = await import(
    '/Users/tom/GitHub/storybookjs/nextjs-server-example-app/.storybook/preview'
  );
  return composeConfigs([
    projectAnnotations0,
    projectAnnotations1,
    projectAnnotations2,
    projectAnnotations3,
    projectAnnotations4,
    projectAnnotations5,
    projectAnnotations6,
    projectAnnotations7,
    projectAnnotations8,
    // projectAnnotations9,
    projectAnnotations10,
  ]);
};

export const Storybook = () => (
  <Preview getProjectAnnotations={getProjectAnnotations} previewPath="storybook-preview" />
);
