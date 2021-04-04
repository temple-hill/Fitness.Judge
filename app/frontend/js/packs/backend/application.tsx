import * as React from 'react';
import '../../lib/utils/submit_confirm';
import '../../../stylesheets/backend/application.scss';

import Test from '../../components/backend/Test';

import reactRender from '../../lib/reactRender';

const renders: {
  [key: string]: JSX.Element;
} = {
  'react-test': <Test />,
};

reactRender(renders);
