const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
let count = 0;
  
export default async function api([type, query]) {
  let completeURL = '';
  let offset = 15;
  
  offset += count;

  if(type == 'search') {
    completeURL = `${BASE_URL}${type}?api_key=${API_KEY}&q=${query}&rating=g&offset=${offset}&limit=1`;
    count++;
  }
  else {
    completeURL = `${BASE_URL}${type}?api_key=${API_KEY}&rating=g`;
  }

  const response = await fetch(`${completeURL}`);
  const info = await response.json();
  console.log(info)
  if(!Array.isArray(info.data))
    return {data: [info.data]}

  return info;
}
