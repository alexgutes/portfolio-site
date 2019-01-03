import React from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Header from '../components/Header'
import MainContentList from '../components/MainContentList'
import ContactLinks from '../components/ContactLinks'

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`

const IndexPage = () => (
  <>
    <Container>
      <Header />
      <MainContentList />
      <ContactLinks />
    </Container>
    <GlobalStyle />
  </>
)

export default IndexPage
