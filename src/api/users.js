import axios from "axios";
const baseUrl = "http://localhost:2000/api/v1";

export const fetchUsers = async (setUsers, text = "") => {
  const response = await axios.get(`${baseUrl}/users?search=${text}`);
  const data = response.data.data.results;
  data.map((d) => {
    d.created_at = d.created_at.split("T")[0];
    if (d.updated_at) d.updated_at = d.updated_at.split("T")[0];
  });
  setUsers(data);
};
