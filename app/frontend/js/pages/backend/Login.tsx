import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import { BaseContext } from '../../lib/contexts/base';
import Notification from '../../components/shared/Notification';
import { buildBackendUrl } from '../../lib/utils/url_builder';
import { Session, login } from '../../modules/backend/session';

const Login: React.FC = () => {
  const [session, setSession] = React.useState<Session>({ email: '', password: '' });
  const { info, setInfo, errors, setErrors, axiosWithHandleErrors } = React.useContext(BaseContext);

  const handleChange = React.useCallback(
    (key: keyof Session, value: any) => {
      const newSession = { ...session };
      newSession[key] = value;
      setSession(newSession);
    },
    [session]
  );

  const handleMessageClear = React.useCallback(() => {
    setInfo('');
    setErrors([]);
  }, [setInfo, setErrors]);

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      handleMessageClear();
      const res = await axiosWithHandleErrors(login(session));

      if (res.errors) {
        setErrors(res.errors);
        return;
      }

      setInfo(res.info);
      window.location.href = buildBackendUrl('');
    },
    [session, axiosWithHandleErrors, setInfo, setErrors, handleMessageClear]
  );

  return (
    <div className="backend-login-layout">
      <div className="backend-login-layout__body">
        <Notification info={info} errors={errors} clear={handleMessageClear} />
        <h3 className="text-info">管理者ログイン</h3>
        <Form>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="メールアドレス"
              value={sessionStorage.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="パスワード"
              value={sessionStorage.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
          </Form.Group>
          <Button block type="submit" onClick={(e) => handleSubmit(e)}>
            ログイン
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
