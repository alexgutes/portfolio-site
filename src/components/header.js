import React from 'react'
import styled from 'styled-components'

const Avi = styled.img`
  border-radius: 50%;
`

export default function Header() {
  return (
    <div>
      <Avi src="https://via.placeholder.com/32" />
      <span>Alex Gutierrez</span>
    </div>
  )
}
