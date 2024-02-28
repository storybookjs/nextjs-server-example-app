import React from 'react';
import { Storybook } from './components/Storybook';
import * as stories from '../../stories/Header.stories';

if (typeof window !== 'undefined') {
  window._storybook_onImport('./src/stories/Header.stories.ts', stories);
}

const page = () => <Storybook />;
export default page;