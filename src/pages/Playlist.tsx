import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Content, Footer, Header, Sidebar } from '../components'

const Playlist = () => {
  return (
    <StyledLibrary>
        <Sidebar />
        <StyledContent>
            <Header/>
        </StyledContent>
        <Footer/>
    </StyledLibrary>
  )
}

export default Playlist

const StyledLibrary = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
`
const StyledContent = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
`