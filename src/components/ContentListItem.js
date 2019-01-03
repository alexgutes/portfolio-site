import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  max-width: 150px;
  max-height: 150px;
  flex: 0 0 auto;
`

export default function ContentListItem(props) {
  return (
    <ItemContainer>
      <span>{props.title}</span>
      <div>
        <img src={props.src} />
      </div>
    </ItemContainer>
  )
}
