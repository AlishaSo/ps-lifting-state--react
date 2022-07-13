const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
  
export default async function api() {
  const completeURL = `${BASE_URL}random?api_key=${API_KEY}&rating=g`;

  const response = await fetch(`${completeURL}`);
  const info = await response.json();
  console.log(info)

  return info;
}
