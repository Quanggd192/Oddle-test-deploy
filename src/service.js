import axios from "axios";

export async function searchUser(query, page=1, per_page=10) {
  let result = await axios({
    method: "GET",
    url: `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${per_page}`,
  });
  return result;
}

export async function getUser(query) {
  let result = await axios({
    method: "GET",
    url: `https://api.github.com/users/${query}`,
  });
  return result;
}
