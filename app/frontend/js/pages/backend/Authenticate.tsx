import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { BaseContext } from '../../lib/contexts/base';
import { BackendBaseContext, AdminModel } from '../../lib/contexts/backend/base';
import { buildBackendUrl } from '../../lib/utils/url_builder';
import { authenticate } from '../../modules/backend/authenticate';
import Loading from '../../components/shared/Loading';

type Props = {};

const Authenticate: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [currentAdmin, setCurrentAdmin] = React.useState<AdminModel | undefined>(undefined);

  const { setErrors, axiosWithHandleErrors } = React.useContext(BaseContext);

  const handleAuthenticate = React.useCallback(async () => {
    const res = await axiosWithHandleErrors(authenticate());
    if (res.status === 401) {
      setLoaded(true);
      return;
    }

    setCurrentAdmin(res.current_admin);
    setLoaded(true);
  }, [axiosWithHandleErrors]);

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    handleAuthenticate();
    setErrors([]);
  }, [location]);
  /* eslint-enable react-hooks/exhaustive-deps */

  if (!currentAdmin && loaded) {
    window.location.href = buildBackendUrl('login');
  }

  if (!loaded || !currentAdmin) {
    return <Loading isLoading={true} />;
  }

  return (
    <BackendBaseContext.Provider
      value={{
        currentAdmin: currentAdmin,
      }}
    >
      <div>{children}</div>
    </BackendBaseContext.Provider>
  );
};
export default Authenticate;
