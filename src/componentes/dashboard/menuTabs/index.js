import styled from '@emotion/styled'

export const TabHead = styled("div")`
  border-top: 1px solid gray; 
  border-bottom: 1px solid gray;
  display: flex;
`
export const TabContainer = styled("div")`
  width: 100%;
  height: 100%;
`

export const TabBody = styled("div")`
  height: 100%;
  width: 100%;
`
export const Tab = styled("div")`
  padding: 0.5em;
  background: ${({ selected }) => (selected ? "#48B4E0" : "#ebedf0")};
  color: ${({ selected }) => (selected ? "white" : "#4b5563")}
`