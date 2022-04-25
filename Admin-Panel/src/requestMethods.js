import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDQ5ZDZhOThjZWI0NjFlNjliMjMzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDg2MTQ3OCwiZXhwIjoxNjUxMTIwNjc4fQ.sRZuFKARGm_kXtgfR7Sxtv0mKIO3nim8NM5m70noPeg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
