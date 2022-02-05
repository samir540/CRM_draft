import { useState, useRef } from "react";
import { Modal, Button } from "antd";
import UserRegistrationForm from "./UserRegistrationForm";

const UserEntryModal = ({ onAddUser }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formRef = useRef();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    formRef.current.reset();
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create a new user
      </Button>
      <Modal
        title="New User Details"
        visible={isModalVisible}
        onCancel={hideModal}
        okText="Create"
        okButtonProps={{ htmlType: "submit", form: "userCreationForm" }}
        centered
      >
        <UserRegistrationForm
          onCloseModal={hideModal}
          onAddUser={onAddUser}
          ref={formRef}
        />
      </Modal>
    </>
  );
};

export default UserEntryModal;
