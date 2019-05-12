import data from '../feed/sample.json';

export const filterData = data =>
  data.entries
    .filter(item => item.releaseYear >= 2010)
    .sort((item1, item2) =>
      item1.title.toLowerCase() < item2.title.toLowerCase() ? -1 : 1
    );

export const getPrograms = () =>
  new Promise(resolve => setTimeout(() => resolve(data), 1000)).then(
    filterData
  );
