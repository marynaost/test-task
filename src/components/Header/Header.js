import styled from 'styled-components'
import Filter from 'components/Filter/Filter'

export default function Header({ changesort, filter, changeFilter, ...props }) {
  return (
    <HeaderEl {...props}>
      <p onClick={changesort}>Sort </p>
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
