import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDQ5ZDZhOThjZWI0NjFlNjliMjMzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODc5MTM4NiwiZXhwIjoxNjQ5MDUwNTg2fQ.m_IhYSVflvyjWpoir_ULLvHwsUGX6LjhBtSSwr6d7UY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
