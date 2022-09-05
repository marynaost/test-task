import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as API from 'services/api'
import Header from 'components/header/Header'
import UserCard from 'components/user-card/UserCard'
import usePagination from 'hooks/usePagination'
import Icon from 'components/Icon'
import 'modern-normalize/modern-normalize.css'
import './App.css'
import './index.css'

export default function App() {
  const [users, setUsers] = useState([])
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

  const changeSort = () => {
    setSort(!sort)

    if (!sort) {
      users.sort((a, b) => a.name.localeCompare(b.name))
      return
    }
    users.sort((a, b) => b.name.localeCompare(a.name))
  }
  const usersFiltered = filteredUsers()

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
          firstContentIndex={firstContentIndex}
          lastContentIndex={lastContentIndex}
        />
      ) : (
        <div>Sorry, users not found</div>
      )}

      <Navigation>
        <div onClick={prevPage} className="page">
          <Icon
            style={{ marginRight: '30px' }}
            width="18px"
            height="36px"
            stroke="#eee"
            fill="transparent"
            iconName="icon-prev"
          />
          Previous
        </div>

        <div onClick={nextPage} className="page">
          Next
          <Icon
            style={{ marginLeft: '30px' }}
            width="18px"
            height="36px"
            stroke="#eee"
            fill="transparent"
            iconName="icon-next"
          />
        </div>
      </Navigation>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 350px;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

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

const Navigation = styled.div`
  position: fixed;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;

  .page {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1000px) {
    width: 1000px;
  }

  @media screen and (min-width: 1500px) {
    width: 1470px;
  }
`
