import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from '../../shared/Modal';

type Props = {
  isModalOpen: boolean;
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: any) => void;
  handleModalClear: () => void;
}

const EmailFormModal: React.FC<Props> = ({
  isModalOpen,
  email,
  setEmail,
  handleSubmit,
  handleModalClear,
}) => {

  return (
    <Modal
      isOpen={isModalOpen}
      handleClear={handleModalClear}
      modalTitle={"パスワードを忘れた場合"}
    >
      <div>登録したメールアドレスを入力してください。</div>
      <div className="mb-3">パスワード再設定用のメールが送信されます。</div>
      <Form>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button block className="main-btn" type="submit" onClick={(e) => handleSubmit(e)}>
          送信
        </Button>
      </Form>
    </Modal>
  );
};

export default EmailFormModal;
