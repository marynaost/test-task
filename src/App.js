import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as API from 'services/api'
import Header from 'components/Header/Header'
import UserCard from 'components/UserCard/UserCard'
import usePagination from 'hooks/usePagination'
import 'modern-normalize/modern-normalize.css'
import './App.css'
import './index.css'

export default function App() {
  const [users, setUsers] = useState([])
  const [showPost, setShowPost] = useState(false)
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState(false)
  const { firstContentIndex, lastContentIndex, nextPage, prevPage, setPage } =
    usePagination({
      contentPerPage: 4,
      count: users.length,
    })

  useEffect(() => {
    API.fetchUserData()
      .then(res => {
        setUsers(res)
      })
      .catch(console.error())
  }, [])

  const changeFilter = e => {
    setFilter(e.target.value)
    setPage(1)
  }

  const filteredUsers = () => {
    const normalizedFilter = filter.toLowerCase()
    return users.filter(user =>
      user.name.toLowerCase().includes(normalizedFilter),
    )
  }
  // const sortedUsers = () => {
  //   return [...users].sort((a, b) => a.name.localeCompare(b.name))
  // }

  const handleClick = () => {
    setShowPost(!showPost)
  }

  const changeSort = () => {
    setSort(!sort)

    if (!sort) {
      users.sort((a, b) => a.name.localeCompare(b.name))
      return
    }
    users.sort((a, b) => b.name.localeCompare(a.name))
  }
  const usersFiltered = filteredUsers()
  console.log(usersFiltered)

  return (
    <Wrap>
      <Header
        className="header"
        changeFilter={changeFilter}
        filter={filter}
        changesort={changeSort}
      />
      {usersFiltered.length > 0 ? (
        <UserCard
          users={usersFiltered}
          onClick={handleClick}
          showPost={showPost}
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
        />
      ) : (
        <div>Sorry, users not found</div>
      )}

      <Prev>
        <div onClick={prevPage}>Previous</div>

        <div onClick={nextPage} className="page">
          Next
        </div>
      </Prev>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 1000px;
  padding: 50px 0px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1000px) {
    width: 1000px;
  }

  @media screen and (min-width: 1500px) {
    width: 1470px;
  }

  .header {
    margin-bottom: 35px;
    margin-right: auto;
    margin-left: auto;
  }
`

const Prev = styled.div`
  position: fixed;
  bottom: 70px;
  display: flex;
  justify-content: space-between;
  width: 1000px;

  @media screen and (min-width: 1500px) {
    width: 1470px;
  }
`
