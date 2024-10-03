import axios from "axios";
import { API_URL } from "../constant";

export const getArticles = async () => {
  const response = await axios.get(`${API_URL}/article`);
  return response.data;
};

export const getAcademic = async () => {
  const response = await axios.get(`${API_URL}/academic`);
  return response.data;
};

export const getRecent = async () => {
  const response = await axios.get(`${API_URL}/recent`);
  return response.data;
};

export const getBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};
