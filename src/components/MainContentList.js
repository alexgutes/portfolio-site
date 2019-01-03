import React from 'react'
import styled from 'styled-components'

import ContentListItem from './ContentListItem'

const FlexList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-evenly;
`

export default function MainContentList() {
  return (
    <FlexList>
      <ContentListItem src="https://via.placeholder.com/150" title="About me" />
      <ContentListItem src="https://via.placeholder.com/150" title="Skills" />
      <ContentListItem src="https://via.placeholder.com/150" title="Truck'd" />
      <ContentListItem
        src="https://via.placeholder.com/150"
        title="EmojifFul"
      />
      <ContentListItem
        src="https://via.placeholder.com/150"
        title="Wack Overflow"
      />
    </FlexList>
  )
}
