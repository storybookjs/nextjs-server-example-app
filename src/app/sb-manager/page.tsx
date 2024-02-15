import React from 'react';
import Link from 'next/link';
import { storyIndex } from '../../storyIndex';

export default function Page() {
  return (
    <ul>
      {Object.entries(storyIndex).map(([id, { title, name }]) => (
        <li>
          <Link href={`/storybook-redirect/${id}`}>
            {title}: {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
