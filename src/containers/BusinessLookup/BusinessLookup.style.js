import styled from '@emotion/styled'

const ResultSection = styled.div`
  display: flex;
  padding-top: 40px;
`

const ListColumn = styled.div`
  flex: 1;
`

const DetailsColumn = styled.div`
  flex: 2;
  padding: 0 10px;
`

const BusinessListItem = styled.li`
  padding: 10px 5px;
  cursor: pointer;

  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`

const SearchSection = styled.div`
  display: flex;
`

const SearchForm = styled.form`
  flex: 1;
`

const InputLabel = styled.label`
  padding: 5px 0;
`

export {
  ResultSection,
  ListColumn,
  DetailsColumn,
  BusinessListItem,
  SearchSection,
  SearchForm,
  InputLabel,
}
