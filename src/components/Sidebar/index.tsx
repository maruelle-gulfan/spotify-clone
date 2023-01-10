import Navlinks from './Navlinks'
import styled from 'styled-components'
import { logo } from '../../data'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DataContext, IState } from '../../Context'

const Sidebar = () => {
  
  const context:IState = useContext(DataContext)

  const { isSidebarShown} = context?.state
  
  useEffect(()=> {
    console.log(isSidebarShown)
  },[isSidebarShown])


  return (
    <StyledSidebar className={`${isSidebarShown ? 'active' : 'not-active'}`}>
      <div className="Logo" >
        {logo.map(logo=> {
          return (
            <Link to={logo.path}>
              <i className={logo.iconName}></i>
              <div>{logo.name}</div>
              <i className={logo.iconName2}></i>
            </Link>
          )
        })}
      </div>
      <Navlinks/>

    </StyledSidebar>
  )
}

export default Sidebar


const StyledSidebar = styled.div`
  color:white;
  padding: 0 1.8rem;
  padding-top: 1.8rem;
  width: 250px;
  background-color: black;
  height: 95vh;
  @media screen and (max-width: 425px) {
          display: none;
          &.active{
            display: block;
            position: fixed;
            z-index: 2;
          }
        }
    .Logo{
      display: flex;
      
      margin-bottom: 2rem;
        a{
          text-decoration: none;
          color: white;
          display:flex;
          vertical-align: middle;
          .spotify{
            font-size: 2.5rem;
            padding-right: 0.5rem;
          }
          div{
              font-size: 1.7rem;
              font-weight: 700;
              padding-top: .3rem;
          }
          .r{
              font-size: .48rem;
              margin-top: .8rem;
          }
        }
    }
`