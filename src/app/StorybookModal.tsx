import Link from 'next/link';
import { storyIndex } from '../storyIndex';
import { getLastRequestMockData } from '../mock';
import { StoryForm } from './StoryForm';
import { URL } from 'url';
import { readFile, writeFile } from 'fs/promises';

export function StorybookModal({}) {
  async function saveStory(url: string) {
    'use server';

    const $mock = getLastRequestMockData();

    // TODO this code is obviously super custom
    const { pathname, searchParams } = new URL(url, 'https://whatever.com');
    const sort = searchParams.get('sort');
    const $url = {
      number: pathname.split('/').at(-1),
      ...(sort && { sort }),
    };

    const title = 'Pages / Build';
    const name = 'New Build';
    const exportName = 'NewBuild';
    const id = 'pages-build--new-build';

    const story = `
      export const ${exportName} = {
        args: {
          $url: ${JSON.stringify($url)},
          $mock: ${JSON.stringify($mock)},
        },
      };
    `;

    const csfFile = './src/page-stories/build.stories.ts';
    const csfContents = (await readFile(csfFile)).toString('utf-8');
    await writeFile(csfFile, `${csfContents}\n\n${story}`);

    const indexEntry = `
      '${id}': {
        title: '${title}',
        name: '${name}',
        csf: stories,
        key: '${exportName}',
      },
    `;

    const indexFile = './src/storyIndex.ts';
    const indexContents = (await readFile(indexFile)).toString('utf8');
    await writeFile(indexFile, indexContents.replace('};', `${indexEntry}\n};`));
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
          <StoryForm saveStory={saveStory} />
        </li>
      </ul>
    </div>
  );
}
