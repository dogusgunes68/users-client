import { Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchUsers } from "../api/users";

export const Search = ({ setUsers }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetchUsers(setUsers, text);
  }, [text]);

  const onInputChange = (event) => {
    setText(event.target.value);
  };

  return <Input placeholder="Search" onChange={onInputChange} value={text} />;
};
