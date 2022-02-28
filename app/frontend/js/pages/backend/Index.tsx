import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { BackendBaseContext } from '../../lib/contexts/backend/base';
import { buildBackendUrl } from '../../lib/utils/url_builder';
import Header from '../../components/backend/shared/Header';
import SideMenu from '../../components/backend/shared/SideMenu';
import NoMatch from './NoMatch';

const Index: React.FC = () => {
  const location = useLocation();
  const { currentAdmin } = React.useContext(BackendBaseContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <React.Fragment>
      <div className="backend-layout">
        {window.location.pathname.includes('login') ? null : (
          <React.Fragment>
            <header className="backend-layout__header">
              <Header adminName={currentAdmin.name} />
            </header>

            <aside className="backend-layout__aside">
              <SideMenu />
            </aside>
          </React.Fragment>
        )}
        <div className="backend-layout__body">
          <div className="backend-container">
            <Switch>
              <Route exact path={buildBackendUrl('')}>
                <h1>コンテスト一覧（管理者画面）</h1>
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Index;
