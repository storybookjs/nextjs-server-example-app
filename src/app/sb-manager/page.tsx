import React from 'react';
import Link from 'next/link';
import * as stories from '../../page-stories/build.stories';

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

export default function Page() {
  return (
    <ul>
      {Object.entries(map).map(([id, { key }]) => (
        <li>
          <Link href={`/storybook-redirect/${id}`}>{key}</Link>
        </li>
      ))}
    </ul>
  );
}
