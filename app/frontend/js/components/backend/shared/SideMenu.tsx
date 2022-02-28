import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { buildBackendUrl } from '../../../lib/utils/url_builder';

const SideMenu: React.FC = () => {

  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to={buildBackendUrl('')}>
            <FontAwesomeIcon icon={'users'} /> 団体管理
          </Link>
        </li>
        <li>
          <Link to={buildBackendUrl('')}>
            <FontAwesomeIcon icon={'trophy'} /> 大会管理
          </Link>
        </li>
        <li>
          <Link to={buildBackendUrl('')}>
            <FontAwesomeIcon icon={'user-cog'} /> 管理者管理
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideMenu;
