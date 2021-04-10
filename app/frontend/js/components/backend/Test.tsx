import * as React from 'react';
import Modal from '../shared/Modal';

type Props = {
}

const Test: React.FC<Props> = ({
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        モーダル表示
      </button>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        <p>てすと</p>
      </Modal>
    </div>
  );
};

export default Test;
