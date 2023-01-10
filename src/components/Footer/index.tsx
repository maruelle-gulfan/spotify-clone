import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <StyledFooter>
      <p>All rights Reserved | Made By: Maruelle Gulfan</p>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  padding: 3rem 0;
  background-color: #181818;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 3;
  @media screen and (max-width: 900px) {
    padding: 2rem 0; 
  }

  p {
      font-size: 1rem;
      color: #b2b2b2;
  }
`
