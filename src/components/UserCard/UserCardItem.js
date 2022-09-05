import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as API from 'services/api'
// import ShowPost from 'components/ShowPost'

export default function UserCardItem({
  id,
  name,
  email,
  phone,
  website,
  onChange,
}) {
  const [userPost, setUserPost] = useState([])
  const [showPost, setShowPost] = useState(false)

  useEffect(() => {
    API.fetchUserPost(id)
      .then(res => {
        setUserPost(res)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleClick = () => {
    setShowPost(!showPost)
    // onChange(showPost, userPost)
  }

  return (
    <>
      <Card>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone.split(' ')[0]}</p>
        <p>{website}</p>
        <Button
          type="button"
          onClick={async () => {
            handleClick()
            onChange(!showPost, userPost)
          }}
        >
          {showPost ? 'Hide posts' : 'Show all posts '}
        </Button>
        {/* {showPost && <ShowPost data={userPost} />} */}
      </Card>
    </>
  )
}

const Card = styled.li`
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333348;
  border-radius: 40px;
  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 220px;
    height: 220px;
  }
  @media screen and (min-width: 1000px) {
    width: 220px;
    height: 240px;
  }

  @media screen and (min-width: 1500px) {
    width: 270px;
    height: 220px;
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
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    padding: 16px 15px;
  }
`
UserCardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}
