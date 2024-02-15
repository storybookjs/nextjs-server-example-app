import Link from 'next/link';
import { storyIndex } from '../storyIndex';
import { getLastRequestMockData } from '../mock';

export function StorybookModal({}) {
  async function saveStory() {
    'use server';

    console.log(getLastRequestMockData());
  }

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

        <li>
          <form action={saveStory}>
            Save current route
            <button type="submit">Go</button>
          </form>
        </li>
      </ul>
    </div>
  );
}
