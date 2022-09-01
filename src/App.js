import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as API from 'services/api'
import 'modern-normalize/modern-normalize.css'
import './App.css'
import './index.css'

// const BASE_URL = 'https://api.themoviedb.org/3'
// const API_KEY = 'd071eb929d342524907df1efa8aa0a29'

// async function fetchMovies(url = '', config = {}) {
//   const response = await fetch(url, config)
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not Found'))
// }

// function fetchPopularMovies() {
//   return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
// }

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    API.fetchUserData()
      .then(res => setUsers(res))
      .catch(console.error())
  }, [])

  console.log(users)

  return (
    <>
      <h1>Test interview</h1>
      {users && (
        <ul>
          {users.map(el => (
            <Card key={el.id}>
              <p>{el.name}</p>
              <p>{el.email}</p>
              <p>{el.phone}</p>
            </Card>
          ))}
        </ul>
      )}
    </>
  )
}

const Card = styled.li`
  width: 420px;
  height: 370px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: #333348;
  border-radius: 40px;
`
