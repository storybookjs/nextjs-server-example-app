import React from 'react';

import { getBuild } from '@/getBuild';

export default async function Build({
  params: { number },
  searchParams: { sort = 'asc' },
}: {
  params: { number: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <pre>
        Build page, build number: {number}, sort: {sort} Build data:{' '}
        {JSON.stringify(await getBuild(number))}
      </pre>
    </div>
  );
}
