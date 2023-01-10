import React from 'react'
import { links } from '../../../data'
import { links2 } from '../../../data'
import styled from 'styled-components'
import PageLink from '../../PageLink'

const Navlinks = () => {

  return (
    <StyledNav>
      <div>
        {links.map(link=> {
          
          return (
            <PageLink to={link.path}>
              <i className={link.iconName}></i>
              <span>{link.name}</span>
            </PageLink>
          )
        })}
        
      </div>
      <div className='nav-link2'>
        {links2.map(links2=> {
            return (
              <PageLink to={links2.path}>
                <i className={links2.iconName}></i>
                <span>{links2.name}</span>
              </PageLink>
            )
          })}
      </div>
    </StyledNav>
  )
}

export default Navlinks


const StyledNav = styled.nav`
  div {
    display: flex;
    flex-direction: column;
    a{
      margin: .6rem 0;
      text-decoration: none;
      color: #b2b2b2;
      i{
        font-size: 1.5rem;
        padding-right: 1rem;
        vertical-align: middle;
      }
      span{
        vertical-align: middle;
        font-weight: 700;
      }
      &:hover{
        color: white;
      }
      &.active{
        color:white;
      }
    }
  }
  .nav-link2 {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    a{
      margin: .7rem 0;
      text-decoration: none;
      color: $color2;
      i{
          font-size: 2rem;
          padding-right: 1rem;
          vertical-align: middle;
      }
      span{
          vertical-align: middle;
          font-weight: 700;
      }

      &.active {
        color:white;
      }

      &:hover{
          color: white;
      }
      &:last-child{
        display: flex;
        margin: .7rem 0;
        text-decoration: none;
        color: #b2b2b2;
        padding-bottom: 1rem;
        border-bottom:  1px solid #b2b2b2;
          span{
            vertical-align: middle;
            font-weight: 700;
            padding-top: .4rem;
          }
          i{
            font-size: 1rem;
            padding-right: 1rem;
            vertical-align: middle;
            background: rgb(40,7,135);
            background: linear-gradient(117deg, rgba(40,7,135,1) 0%, rgba(133,161,153,1) 100%);
            width: 2rem;
            text-align: center;
            padding: .5rem;
            display: flex;
            margin-right: 1rem;
            vertical-align: middle;
          }
          &:hover{
            color: white;
        }
      }

      .active{
        color:white;
      }
    }
  }

`
