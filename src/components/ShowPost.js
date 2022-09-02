import { nanoid } from 'nanoid'
import styled from 'styled-components'
import ShowPostItem from './ShowPostItem'

export default function ShowPost({ data, ...props }) {
  return (
    <>
      {data && (
        <PostsList {...props}>
          {data.map(post => (
            <ShowPostItem key={nanoid()} post={post} />
          ))}
        </PostsList>
      )}
    </>
  )
}

const PostsList = styled.ul`
  position: absolute;
  background: #333348;
  border-radius: 40px;
  right: 0;
  top: 0;
  @media screen and (min-width: 1000px) {
    width: 430px;
    padding: 30px 20px;
  }

  @media screen and (min-width: 1500px) {
    padding: 50px 50px;
    width: 870px;
  }
`
