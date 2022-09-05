import styled from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'
import UserCardItem from './UserCardItem'
import ShowPost from 'components/post/ShowPost'

export default function UserCard({
  firstContentIndex,
  lastContentIndex,
  users,
}) {
  const [show, setShow] = useState(false)
  const [userPost, setUserPost] = useState([])

  const handleChange = (showPost, userPost) => {
    setShow(showPost)
    setUserPost(userPost)
  }

  return (
    <>
      {users && (
        <UsersWrap>
          <ListUsers>
            {users
              .slice(firstContentIndex, lastContentIndex)
              .map(({ id, name, email, phone, website }) => (
                <UserCardItem
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                  phone={phone}
                  website={website}
                  onChange={handleChange}
                />
              ))}
          </ListUsers>
          {show && <ShowPost data={userPost} />}
        </UsersWrap>
      )}
    </>
  )
}

const UsersWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListUsers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }

  @media screen and (min-width: 1500px) {
    width: 570px;
  }
`
UserCardItem.propTypes = {
  firstContentIndex: PropTypes.number,
  lastContentIndex: PropTypes.number,
  users: PropTypes.array,
}
