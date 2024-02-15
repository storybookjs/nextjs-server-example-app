import { cookies } from 'next/headers';
// @ts-expect-error wrong react version
import { cache } from 'react';
import { storyIndex } from './storyIndex';
import { composeStory } from '@storybook/react';

const getStoryMockData = cache(() => {
  const storyId = cookies().get('__storyId__')?.value;
  console.log(`Getting mock data for '${storyId}'`);

  if (!storyId) return null;
  if (!(storyId in storyIndex)) throw new Error(`unknown storyId: '${storyId}`);

  const data = storyIndex[storyId as keyof typeof storyIndex];

  const { args } = composeStory(
    // @ts-expect-error fix types
    data.csf[data.key],
    data.csf.default,
    {},
    data.key
  );

  return args.$mock;
});

type Exports = Record<string, any>;

export function mockFn<TFunction extends (...args: any[]) => any>(
  original: TFunction,
  mockKey: string
) {
  return (...args: Parameters<TFunction>) => {
    const data = getStoryMockData();

    if (data[mockKey]) {
      return data[mockKey];
    }

    return original(...args);
  };
}

export function mockModule(original: Exports, mockKey: string) {
  return Object.fromEntries(
    Object.entries(original).map(([exportName, exportValue]) => {
      if (!(exportValue instanceof Function)) {
        console.warn(
          `We don't currently handle non-functional exports for ${exportName} export of ${mockKey} mock, returning original value`
        );
        return [exportName, exportValue];
      }

      // TODO: should we instead assume the mock is an object
      return [exportName, mockFn(exportValue, `${mockKey}.${exportName}`)];
    })
  );
}
