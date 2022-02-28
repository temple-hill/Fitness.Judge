import * as React from 'react';
import { Spinner } from 'react-bootstrap';

type Props = {
  isLoading: boolean;
};

const Loading: React.FC<Props> = ({ isLoading }) => {
  return isLoading ? (
    <div className={'screen-loading'}>
      <Spinner animation={'border'} />
    </div>
  ) : null;
};

export default Loading;
