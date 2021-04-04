import * as React from 'react';
import '../../lib/utils/submit_confirm';
import '../../../stylesheets/frontend/application.scss';

import Test from '../../components/frontend/Test';

import reactRender from '../../lib/reactRender';

const renders: {
  [key: string]: JSX.Element;
} = {
  'react-test': <Test />,
};

reactRender(renders);
