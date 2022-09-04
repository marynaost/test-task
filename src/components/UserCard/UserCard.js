import styled from 'styled-components'
import PropTypes from 'prop-types'
import UserCardItem from './UserCardItem'

export default function UserCard({
  firstContentIndex,
  lastContentIndex,
  users,
}) {
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
                />
              ))}
          </ListUsers>
        </UsersWrap>
      )}
    </>
  )
}

const UsersWrap = styled.div`
  position: relative;
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
