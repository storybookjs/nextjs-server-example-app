import { NextRequest, NextResponse } from 'next/server';
import { composeStory } from '@storybook/react';
import { storyIndex } from './storyIndex';

export function middleware(request: NextRequest) {
  const storyId = request.url.split('/').at(-1);

  if (!storyId) throw new Error('no storyId');
  if (!(storyId in storyIndex)) throw new Error(`unknown storyId: '${storyId}`);

  const data = storyIndex[storyId as keyof typeof storyIndex];

  const { args } = composeStory(
    // @ts-expect-error fix types
    data.csf[data.key],
    data.csf.default,
    {},
    data.key
  );

  // TODO compose stories doesn't handle URLs (we could use parameters temporarily?)
  const { url } = data.csf.default;

  // TODO make this bit generic
  const newUrl =
    url.replace('[number]', (args.$url?.number || '').toString()) +
    (args.$url.sort ? `?sort=${args.$url.sort}` : '');

  const response = NextResponse.redirect(new URL(newUrl, request.url));
  response.cookies.set('__storyId__', storyId);
  return response;
}

export const config = {
  matcher: '/storybook-redirect/:path*',
};
