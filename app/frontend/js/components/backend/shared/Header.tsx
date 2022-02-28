import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BaseContext } from '../../../lib/contexts/base';
import { logout } from '../../../modules/backend/session';
import { buildBackendUrl } from '../../../lib/utils/url_builder';

type Props = {
  adminName: string;
}

// eslint-disable-next-line react/display-name
const CustomToggle = React.forwardRef<HTMLAnchorElement, { onClick?: (e) => void }>(
  ({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
    >
      {children}
    </a>
  )
);

const Header: React.FC<Props> = ({
  adminName,
}) => {
  const { axiosWithHandleErrors } = React.useContext(BaseContext);
  const handleLogout = React.useCallback(
    async (e) => {
      e.preventDefault();
      await axiosWithHandleErrors(logout());
      window.location.href = buildBackendUrl('login');
    },
    [axiosWithHandleErrors]
  );

  return (
    <div className="header">
      <div className="header__logo">FitnessJudge 管理画面</div>

      <Dropdown drop={'down'}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-menu">
          {adminName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link to="#" className="dropdown-item" onClick={(e) => handleLogout(e)}>
            ログアウト
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
