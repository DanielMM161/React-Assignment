import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users" 
});

export const getUsers = async () => {
  return await client.get()
}

export const getUserDetail = async (id) => {
  return await client.get(`/${id}`)
}