export const buildQuery = (params: object): string => {
  return Object.keys(params)
    .map((key) => {
      if (params[key] instanceof Array) {
        return params[key]
          .map((value) => {
            return `${encodeURIComponent(`${key}[]`)}=${encodeURIComponent(value)}`;
          })
          .join('&');
      } else {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      }
    })
    .join('&');
};

export const buildSearchStrToObject = (searchStr: string): object => {
  if (!searchStr) return {};

  return searchStr
    .substr(1)
    .split('&')
    .reduce((acc, cur) => {
      if (cur.split('=')[1]) {
        acc[cur.split('=')[0]] = cur.split('=')[1];
      }
      return acc;
    }, {} as { [key: string]: string });
};

export const getElementData = (element: HTMLElement): object => {
  const dataset = element.dataset;
  let data = {};
  if (dataset['props']) {
    data = JSON.parse(dataset['props']);
    dataset['props'] = '';
  }

  return data;
};
