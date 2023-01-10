import React from 'react'
import { Link } from 'react-router-dom'
import { Content, Footer, Sidebar } from '../components'
import styled from 'styled-components'

const Home = () => {
  return (
    <StyledHome>
        <Sidebar />
        <Content/>
        <Footer/>
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
`