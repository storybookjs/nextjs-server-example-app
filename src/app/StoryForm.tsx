'use client';

import { usePathname, useSearchParams } from 'next/navigation';

export const StoryForm = ({ saveStory }: { saveStory: (url: string) => Promise<void> }) => {
  const url = `${usePathname()}?${useSearchParams()}`;
  return (
    <form action={saveStory.bind(null, url)}>
      Save current route
      <button type="submit">Go</button>
    </form>
  );
};
