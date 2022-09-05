import styled from 'styled-components'
import Filter from 'components/filter/Filter'

export default function Header({ changeSort, filter, changeFilter, ...props }) {
  return (
    <HeaderEl {...props}>
      <Text onClick={changeSort}>Sort </Text>
      <Filter search={filter} onChange={changeFilter} />
    </HeaderEl>
  )
}

const HeaderEl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Text = styled.p`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
