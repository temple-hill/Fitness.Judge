import { axios } from '../../lib/utils/axios';
import { AxiosResponse } from 'axios';
import { buildBackendApiUrl } from '../../lib/utils/url_builder';

export type Session = {
  email: string;
  password: string;
};

export const login = (session: Session): Promise<AxiosResponse<any>> => {
  return axios().post(buildBackendApiUrl('login'), {
    session: session,
  });
};

export const logout = (): Promise<AxiosResponse<any>> => {
  return axios().delete(buildBackendApiUrl('logout'));
};
