import originalAxios, { AxiosInstance } from 'axios';

export const csrfToken = (): string => {
  const meta = document.querySelector('meta[name=csrf-token]') as Element;
  return meta['content'];
};

export const axios = (): AxiosInstance => {
  const token = csrfToken();
  const customAxios = originalAxios.create({
    timeout: 10000,
    headers: {
      'X-CSRF-Token': token,
    },
  });
  customAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        alert('読み込みに失敗しました。ページを再読み込みして下さい。');
        return;
      }
    }
  );
  return customAxios;
};
