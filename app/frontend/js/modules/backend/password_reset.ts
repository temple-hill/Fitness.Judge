import { axios } from '../../lib/utils/axios';
import { AxiosResponse } from 'axios';
import { buildBackendApiUrl } from '../../lib/utils/url_builder';

export type PasswordDigest = {
  password: string;
  password_confirmation: string;
};

export const passwordReset = (passwordDigest: PasswordDigest): Promise<AxiosResponse<any>> => {
  return axios().put(buildBackendApiUrl('password_resets/update'), {
    admin: passwordDigest,
  });
};
