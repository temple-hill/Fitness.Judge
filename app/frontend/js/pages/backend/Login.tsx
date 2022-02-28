import * as React from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import { BaseContext } from '../../lib/contexts/base';
import { buildBackendUrl } from '../../lib/utils/url_builder';
import { Session, login, sendPasswordReset } from '../../modules/backend/session';
import Notification from '../../components/shared/Notification';
import EmailFormModal from '../../components/backend/sessions/EmailFormModal';

const Login: React.FC = () => {
  const [session, setSession] = React.useState<Session>({ email: '', password: '' });
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const { info, setInfo, errors, setErrors, axiosWithHandleErrors } = React.useContext(BaseContext);

  const handleChange = React.useCallback((key: keyof Session, value: any) => {
    const newSession = { ...session };
    newSession[key] = value;
    setSession(newSession);
  }, [session]);

  const handleMessageClear = React.useCallback(() => {
    setInfo('');
    setErrors([]);
  }, [setInfo, setErrors]);

  const handleSubmit = React.useCallback(async (e) => {
    e.preventDefault();
    handleMessageClear();
    const res = await axiosWithHandleErrors(login(session));

    if (res.errors) {
      setErrors(res.errors);
      return;
    }

    setInfo(res.info);
    window.location.href = buildBackendUrl('');
  }, [session, axiosWithHandleErrors, setInfo, setErrors, handleMessageClear]);

  const handleModalClear = React.useCallback(() => {
    setEmail('');
    setIsModalOpen(false);
  }, [setEmail, setIsModalOpen]);

  const handleEmailSubmit = React.useCallback(async (e) => {
    e.preventDefault();
    handleMessageClear();
    const res = await axiosWithHandleErrors(sendPasswordReset(email));

    if (res.errors) {
      setErrors(res.errors);
      return;
    }

    setInfo(res.info);
    handleModalClear();
  }, [email, axiosWithHandleErrors, setInfo, setErrors, handleMessageClear]);

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
          <Button block className="main-btn" type="submit" onClick={(e) => handleSubmit(e)}>
            ログイン
          </Button>
        </Form>
        <Nav.Link onClick={() => setIsModalOpen(true)}>
          パスワードを忘れた場合
        </Nav.Link>

        <EmailFormModal
          isModalOpen={isModalOpen}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleEmailSubmit}
          handleModalClear={handleModalClear}
        />
      </div>
    </div>
  );
};

export default Login;
