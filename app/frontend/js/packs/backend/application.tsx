import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../../../stylesheets/backend/application.scss';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import ErrorBoundary from '../../components/shared/ErrorBoundary';
import Base from '../../pages/lib/Base';
import Authenticate from '../../pages/backend/Authenticate';
import Login from '../../pages/backend/Login';
import Index from '../../pages/backend/Index';
import { getElementData } from '../../lib/utils/index';
import { FlashMessageInterface } from '../../lib/interface/responses';

const appElement = document.getElementById('app');
const loginElement = document.getElementById('login');

if (appElement) {
  const flashMessage = getElementData(appElement) as FlashMessageInterface | undefined;
  ReactDOM.render(
    <Router>
      <ErrorBoundary>
        <Base flashMessage={flashMessage}>
          <Switch>
            <Authenticate>
              <Index />
            </Authenticate>
          </Switch>
        </Base>
      </ErrorBoundary>
    </Router>,
    appElement
  );
}

if (loginElement) {
  const flashMessage = getElementData(loginElement) as FlashMessageInterface | undefined;
  ReactDOM.render(
    <ErrorBoundary>
      <Base flashMessage={flashMessage}>
        <Login />
      </Base>
    </ErrorBoundary>,
    loginElement
  );
}
