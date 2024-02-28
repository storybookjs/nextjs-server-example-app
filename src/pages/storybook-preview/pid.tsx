
    import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

    export const getServerSideProps = (async () => {
      return { props: { ppid: process.ppid } }
    }) satisfies GetServerSideProps<{ ppid: number }>;

    export default function Page(
      { ppid }: InferGetServerSidePropsType<typeof getServerSideProps>
    ) {
      const ppidTag = '__ppid_' + ppid + '__';
      return <>{ppidTag}</>;
    };
    