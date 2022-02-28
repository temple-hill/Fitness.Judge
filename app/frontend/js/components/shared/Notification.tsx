import * as React from 'react';
import { Alert } from 'react-bootstrap';

import Nl2br from '../../components/shared/Nl2br';

interface Props {
  info?: string;
  errors?: string[];
  clear?: () => void;
}

const Notification: React.FC<Props> = ({ info, errors, clear }) => {
  return (
    <React.Fragment>
      <Alert
        variant="success"
        dismissible={!!clear}
        show={!!info}
        onClose={clear && (() => clear())}
      >
        <Nl2br text={info} />
      </Alert>
      <Alert
        variant="danger"
        dismissible={!!clear}
        show={!!errors && errors.length !== 0}
        onClose={clear && (() => clear())}
      >
        {errors?.map((error, i) => (
          <div key={i}>{error}</div>
        ))}
      </Alert>
    </React.Fragment>
  );
};

export default Notification;
