const meta = {
  title: 'Pages/Build',
  url: '/builds/[number]',
};

export default meta;

export const BuildSix = {
  args: {
    $url: {
      number: 6,
    },
    $mock: {
      build: {
        number: 6,
        status: 'ACCEPTED',
      },
    },
  },
};

export const BuildSevenDesc = {
  args: {
    $url: {
      number: 7,
      sort: 'desc',
    },
    $mock: {
      build: {
        number: 7,
        status: 'IN_PROGRESS',
      },
    },
  },
};
