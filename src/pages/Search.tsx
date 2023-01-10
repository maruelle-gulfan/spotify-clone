import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Content, Footer, Header, Sidebar } from '../components'

const Search = () => {
  return (
    <StyledSearch>
      <Sidebar />
        <Content />
      <Footer/>
    </StyledSearch>
  )
}

export default Search

const StyledSearch = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
`