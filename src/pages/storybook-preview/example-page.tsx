import React from 'react';
import { Storybook } from './components/Storybook';
import * as stories from '../../stories/Page.stories';

if (typeof window !== 'undefined') {
  window._storybook_onImport('./src/stories/Page.stories.ts', stories);
}

const page = () => <Storybook />;
export default page;