import Link from 'next/link';
import { storyIndex } from '../storyIndex';

export function StorybookModal({}) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        width: '300px',
        height: '200px',
        background: '#eee',
      }}
    >
      <ul>
        {Object.entries(storyIndex).map(([id, { title, name }]) => (
          <li>
            <Link href={`/storybook-redirect/${id}`}>
              {title}: {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
