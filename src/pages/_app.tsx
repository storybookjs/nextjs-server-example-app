import { Storybook } from './storybook-preview/components/Storybook';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Storybook></Storybook>
      <Component {...pageProps} />
    </>
  );
}
