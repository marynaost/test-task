import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { nanoid } from 'nanoid'
import * as API from 'services/api'
import ShowPost from 'components/ShowPost'

export default function UserCardItem({ ID: id, name, email, phone, onClick }) {
  const [userPost, setUserPost] = useState([])
  const [showPost, setShowPost] = useState(false)

  useEffect(() => {
    API.fetchUserPost(id)
      .then(res => setUserPost(res))
      .catch(err => console.log(err))
  }, [id])

  const handleClick = e => {
    setShowPost(!showPost)
  }

  return (
    <>
      <Card onClick={onClick}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone.split(' ')[0]}</p>
        <p>{phone.split(' ')[1]}</p>
        <Button type="button" onClick={handleClick}>
          {showPost ? 'Hide posts' : 'Show all posts '}
        </Button>
      </Card>
      {showPost && <ShowPost data={userPost} />}
    </>
  )
}

const Card = styled.li`
  width: 420px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333348;
  border-radius: 40px;
  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 14px;
    width: 220px;
    height: 240px;
  }

  @media screen and (min-width: 1500px) {
    width: 270px;
    height: 265px;
    font-size: 18px;
  }
`

const Button = styled.button`
  display: block;
  background: #52519d;
  border-radius: 40px;
  padding: 16px 38px;
  border: none;
  color: inherit;
  margin: 0 auto;
  margin-top: 30px;

  @media screen and (min-width: 1000px) {
    padding: 16px 15px;
  }
`
