import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import axios from "axios";
import { useState } from "react";
import { fetchUsers } from "../api/users";

export const UpdateForm = ({ userId, setIsModalOpen, user, setUsers }) => {
  const baseUrl = "http://localhost:2000/api/v1";
  const [updatedUser, setUpdatedUser] = useState(user);

  const updateUser = async () => {
    const filtered = Object.keys(updatedUser)
      .filter((key) => key !== "id")
      .filter((key) => key !== "created_at")
      .filter((key) => key !== "updated_at");

    const data = {};
    filtered.map((key) => (data[key] = updatedUser[key]));

    const response = await axios.put(`${baseUrl}/users/${userId}`, { ...data });
    if (response.data.success === true) {
      fetchUsers(setUsers);
      setIsModalOpen(false);
    }
  };

  const onFinish = async () => {
    await updateUser();
  };

  const onFinishFailed = () => {};

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={user}
      autoComplete="off"
      onFieldsChange={(_, allFields) => {
        allFields.map((field) => {
          setUpdatedUser((prev) => {
            prev[field.name[0]] = field.value;
            return { ...prev };
          });
        });
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Surname"
        name="surname"
        rules={[{ required: true, message: "Please input your surname!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input a valid email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          { required: true, type: "number", message: "Please input your age!" },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: "Please input your country!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="District"
        name="district"
        rules={[{ required: true, message: "Please input your district!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="User Role"
        name="user_role"
        rules={[{ required: true, message: "Please select your user role!" }]}
      >
        <Select>
          <Option value="USER">User</Option>
          <Option value="ADMIN">Admin</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={onFinish}>
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
