import type { Preview } from '@storybook/react';
import { renderToCanvas } from '@storybook/react/dist/entry-preview.mjs';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  renderToCanvas: (renderContext, element) => {
    const { url } = renderContext.storyContext.parameters;

    if (url) {
      console.log('navigating to ', url, window.__NEXT_ROUTER);
      setTimeout(() => {
        window.__NEXT_ROUTER.push(url);
        renderContext.showMain();
      });
    } else {
      return renderToCanvas(renderContext, element);
    }
  },
};

export default preview;
