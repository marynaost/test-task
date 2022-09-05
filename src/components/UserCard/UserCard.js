import styled from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'
import UserCardItem from './UserCardItem'
import ShowPost from 'components/ShowPost'

export default function UserCard({
  firstContentIndex,
  lastContentIndex,
  users,
}) {
  const [show, setShow] = useState(null)
  const [userPost, setUserPost] = useState([])

  const handleChange = (showPost, userPost) => {
    setShow(showPost)
    setUserPost(userPost)
  }
  // const handleShow = () => {
  //   setShow(!show)
  // }

  console.log(show)
  console.log(userPost)
  return (
    <>
      {users && (
        <UsersWrap>
          <ListUsers>
            {users
              .slice(firstContentIndex, lastContentIndex)
              .map(({ id, name, email, phone }) => (
                <UserCardItem
                  key={id}
                  id={id}
                  name={name}
                  email={email}
                  phone={phone}
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
  /* position: relative; */
  display: flex;
  /* justify-content: space-between; */
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
