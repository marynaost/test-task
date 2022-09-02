import styled from 'styled-components'
import UserCardItem from './UserCardItem'

export default function UserCard({
  firstContentIndex,
  lastContentIndex,
  users,
}) {
  const handleClick = e => {
    if (e.target.nodeName !== 'BUTTON') {
      return
    }
    document.querySelector('#list').classList.toggle('list')
  }

  return (
    <>
      {users && (
        <UsersWrap id="wrap">
          <ListUsers onClick={handleClick} id="list">
            {users
              .slice(firstContentIndex, lastContentIndex)
              .map(({ id, name, email, phone }) => (
                <UserCardItem
                  key={id}
                  ID={id}
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

  .list {
    margin-right: auto;
    margin-left: 0;
    padding-top: 30px;
  }
`

const ListUsers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (min-width: 1000px) {
    width: 450px;
  }
  @media screen and (min-width: 1500px) {
    width: 570px;
  }
`
