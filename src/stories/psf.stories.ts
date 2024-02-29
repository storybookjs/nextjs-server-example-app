const meta = {
  title: 'PSF',
  parameters: {
    url: '/page-two',
  },
};
export default meta;

export const PageTwo = {
  loaders: [
    () => {
      console.log('loader running!');
    },
  ],
};

export const PageOne = {
  parameters: {
    url: '/',
  },
};
