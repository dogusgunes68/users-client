import { Button, Modal } from "antd";
import React, { useState } from "react";
import { UpdateForm } from "./UpdateForm";

export const UpdateModal = ({
  isModalOpen,
  setIsModalOpen,
  handleOk,
  handleCancel,
  user,
  userId,
  setUsers,
}) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <UpdateForm
          setIsModalOpen={setIsModalOpen}
          user={user}
          userId={userId}
          key={userId}
          setUsers={setUsers}
        />
      </Modal>
    </>
  );
};
