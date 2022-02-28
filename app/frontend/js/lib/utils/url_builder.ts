export const buildBackendUrl = (path: string): string => {
  return `/backend/${path}`;
};

export const buildBackendApiUrl = (path: string): string => {
  return buildBackendUrl(`api/${path}`);
};
