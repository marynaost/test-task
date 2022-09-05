import { nanoid } from 'nanoid'
import styled from 'styled-components'
import ShowPostItem from './ShowPostItem'

export default function ShowPost({ data, ...props }) {
  return (
    <>
      {data && (
        <Wrap>
          <PostsList {...props}>
            {data.map(post => (
              <ShowPostItem key={nanoid()} post={post} />
            ))}
          </PostsList>
        </Wrap>
      )}
    </>
  )
}
const Wrap = styled.div`
  /* position: absolute; */
  background: #333348;
  border-radius: 40px;
  /* right: 0; */
  /* top: 0; */
  margin-left: auto;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1000px) {
    width: 430px;
  }

  @media screen and (min-width: 1500px) {
    width: 870px;
  }
`

const PostsList = styled.ul`
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #52519d;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #12122d;
    border-radius: 20px;
    border: 3px solid #52519d;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 300px;
    height: 500px;
    overflow: hidden;
    overflow-y: scroll;
  }

  @media screen and (min-width: 1000px) {
    width: 430px;
    padding: 30px 20px;
  }

  @media screen and (min-width: 1500px) {
    padding: 50px 50px;
    width: 870px;
  }
`
