const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

async function fetchData(url = '') {
  const response = await fetch(url)
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'))
}

export function fetchUserData() {
  return fetchData(BASE_URL)
}

export function fetchUserPost(userId) {
  return fetchData(`${BASE_URL}/${userId}/posts`)
}

const API = { fetchData }

export default API
