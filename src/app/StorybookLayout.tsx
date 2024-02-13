import React from 'react';
import { composeStory } from '@storybook/react';

import * as stories from '../page-stories/build.stories';
import { cookies, headers } from 'next/headers';
import { Mock } from '../mock';

const map = {
  'pages-build--build-seven-desc': {
    csf: stories,
    key: 'BuildSevenDesc',
  },
  'pages-build--build-six': {
    csf: stories,
    key: 'BuildSix',
  },
};

export const StorybookLayout = ({ children }) => {
  const storyCookie = cookies().get('__storyId__');

  console.log('StorybookLayout');
  console.log({ storyCookie });
  if (storyCookie) {
    const storyId = storyCookie.value;
    if (!storyId) throw new Error('no storyId');
    if (!(storyId in map)) throw new Error(`unknown storyId: '${storyId}`);

    const data = map[storyId as keyof typeof map];

    const { args } = composeStory(
      // @ts-expect-error fix types
      data.csf[data.key],
      data.csf.default,
      {},
      data.key
    );

    console.log('Setting mock to', args.$mock);
    Mock.set(args.$mock);
  }

  return children;
};
