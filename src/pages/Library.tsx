import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Content, Footer, Sidebar } from '../components'

const Library = () => {
  return (
    <StyledLibrary>
        <Sidebar />
        <Content/>
        <Footer/>
    </StyledLibrary>
  )
}

export default Library

const StyledLibrary = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
`