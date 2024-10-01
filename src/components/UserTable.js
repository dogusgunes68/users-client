import { Button, Table } from "antd";
import { Search } from "./Search";
import { useEffect, useState } from "react";
import { UpdateModal } from "./Modal";

export const UserTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
    },
    {
      title: "User Role",
      dataIndex: "user_role",
      key: "user_role",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Updated At",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "Edit",
      key: "edit",
      render: (_, record) => (
        <Button onClick={() => showModal(record.id, record)}>Edit</Button>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      surname: "Brown",
      email: "john.brown@example.com",
      phone: "123-456-7890",
      age: 32,
      country: "USA",
      district: "California",
      user_role: "Admin",
      id: 1,
      created_at: new Date("2023-01-15T10:00:00Z"),
      updated_at: new Date("2023-09-30T10:00:00Z"),
    },
    {
      key: "2",
      name: "Jane Smith",
      surname: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      age: 28,
      country: "Canada",
      district: "Ontario",
      user_role: "User",
      id: 2,
      created_at: new Date("2023-02-10T11:00:00Z"),
      updated_at: new Date("2023-09-29T11:00:00Z"),
    },
    {
      key: "3",
      name: "Alice Johnson",
      surname: "Johnson",
      email: "alice.johnson@example.com",
      phone: "555-123-4567",
      age: 45,
      country: "UK",
      district: "London",
      user_role: "Moderator",
      id: 3,
      created_at: new Date("2023-03-05T12:00:00Z"),
      updated_at: new Date("2023-09-28T12:00:00Z"),
    },
    {
      key: "4",
      name: "Bob Williams",
      surname: "Williams",
      email: "bob.williams@example.com",
      phone: "555-765-4321",
      age: 38,
      country: "Australia",
      district: "Sydney",
      user_role: "User",
      id: 4,
      created_at: new Date("2023-04-20T13:00:00Z"),
      updated_at: new Date("2023-09-27T13:00:00Z"),
    },
  ];

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [user, setUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = (id, userRecord) => {
    console.log("id: " + id);
    console.log("userRecord: " + userRecord.name);
    setUserId(id);
    setUser({ ...userRecord });
    setIsModalOpen(true);
  };

  return (
    <>
      <Search setUsers={setUsers}></Search>
      <Table columns={columns} dataSource={users} />
      <UpdateModal
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        userId={userId}
        user={user}
        setUsers={setUsers}
      />
    </>
  );
};
