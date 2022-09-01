import React, { useEffect } from 'react'
import * as API from 'services/api'

export default function UserCard(params) {
  useEffect(() => {
    API.fetchUserPost()
      .then(res => console.log(res))
      .catch(console.error())
  }, [])
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
