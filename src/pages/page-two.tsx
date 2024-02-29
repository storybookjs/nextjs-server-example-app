import { useEffect, useState } from 'react';

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      if (!data) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
        setData(await response.json());
      }
    })();
  });

  return data;
};

export default () => {
  const data = useData();

  return <div id="page-two">Page Two - {data?.[0].title || 'loading'}</div>;
};
