import { axios } from '../../lib/utils/axios';
import { buildBackendApiUrl } from '../../lib/utils/url_builder';

export const authenticate = (): any => {
  return axios().get(buildBackendApiUrl('authenticate'));
};
