import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { DataContext, IState,  } from '../../Context';
import styled from 'styled-components';


const Header = () => {
  const context:IState = useContext(DataContext)
  const location = useLocation()  
  const [text, setText] = useState('');

  const [shown, setShown] = useState(false);
  const [showing, setShowing] = useState(true);

  const changeHandler = (e:any) => {
    setText(e.target.value)
  }

  const { setState } = context

//Search Value
  useEffect(() => {
    setState({
      ...context.state,
      isSearching: text!== undefined && text !== '',
      searchValue: text,
      isLoading: true
    })
  }, [text])

// Sidebar showing/not showing for SP
  useEffect(()=>{
    setState({
      ...context.state, isSidebarShown : !showing,  
    })
  },[showing])

  
  return (
    <StyledHeader>
      <div className="itemLeft">
        <div className="wrapper">
            <div className="prev">
              <a href="#">
                <i className="fas fa-angle-left"></i>
              </a>
            </div>
            <div className="next">
              <a href="#">
              <i className="fas fa-angle-right"></i>
              </a>
            </div>
        </div>
        {location.pathname === '/search' &&  <input type='text' onChange={(e) => changeHandler(e)}/>} 
      </div>
      <div className="itemRight">
        <div className="wrapper">
          <div className="upgrade">
            <p>UPGRADE</p>
          </div>
          <div onClick={()=> {setShown(!shown)}} className="user">
            <i className="fas fa-user-circle bg-ray"></i>
            <p>Maruelle Gulfan</p>
            <i className={`${shown ? 'fas fa-caret-up cd' : 'fas fa-caret-down cd'}`}></i>
          </div>
          <div onClick={()=> {setShowing(!showing)}} className="hamburger-menu">
            <i className="fas fa-bars"></i>
          </div>

          <div className={`${shown ? 'active' : 'not-active'}`}>
                <p>Settings</p>
                <p>Profile</p>
                <p>Upgrade to Premium</p>
                <p>Logout</p>
            </div>
        </div>
      </div>

    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  margin: 1rem 0;
  height: 2rem;
  width: 100%;
  background-color: transparent;
  position:sticky;
  .itemLeft { 
    width: 50%;
    text-align: start;
    margin-left: 1rem;
    display:flex;
    
      .wrapper{
          display: flex;
          color: #b2b2b2;
          justify-content: space-between;
          width: 85px;
          margin-right:1rem;
          .prev {
              padding: 7px 15px;
              border-radius: 50%;
              background-color: #131313;
              cursor: not-allowed;
          }
          .next {
              padding: 7px 15px;
              border-radius: 50%;
              background-color: #131313;
              cursor: not-allowed;
          }
          .prev a,.next a{
              text-decoration: none;
              color: #b2b2b2;
              cursor: not-allowed;
          }
          @media screen and (max-width: 390px){
              display: none;
          }
      }
      input {
        border-radius:50px;
        box-shadow:none;
        border:none;
        padding-left:1rem;
        @media screen and (max-width: 280px) {
          width: 10rem;
        }

        @media screen and (max-width: 540px) {
          width: 10rem;
        }
      }
  }

  .itemRight {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding: 0 2rem 0 0;
    vertical-align: middle;
    @media screen and (max-width: 768px){
      padding: 0 1rem 0 0;
        }
    .wrapper {
        display: flex;
        justify-content: space-between;
        width: 26rem;
        vertical-align: middle;
        position:relative;
        @media screen and (max-width: 912px) {
          width: 14rem;
        }
        @media screen and (max-width: 540px) {
          width: 2rem;
        }
        @media screen and (max-width: 425px) {
          width: 5rem;
        }
        .upgrade{
            padding: 6px 30px;
            background-color: #0a0a0a;
            color: white;
            letter-spacing: .1rem;
            border-radius: 50px;
            border: 1px solid #b2b2b2;
            @media screen and (max-width: 912px){
              display: none;
            }

            &:hover{
                transform: scale(1.06);
            }
        }
        .user {
            padding: 5px 0;
            background-color: #0a0a0a;
            color: white;
            letter-spacing: .1rem;
            border-radius: 50px;
            display: flex;
            justify-content: space-between;
            width: 14rem;
            @media screen and (max-width: 540px){
                  width: 2rem;
                  padding: 4px 0;
                  p{
                    display: none;
                  }
                }
            cursor:pointer;
            i {
                font-size: 1.5rem;
                padding: 0 .3rem;
            }
            .bg-gray {
                color: gray;
            }
            .cd {
                font-size: 1.3rem;
                padding-right: .7rem;
                @media screen and (max-width: 540px){
                  display: none;
                }
            }



        }

        .hamburger-menu{
          display: none;
          @media screen and (max-width: 425px){
            width: 2rem;
            padding: 4px 0;
            display: block;
            background-color: #0a0a0a;
            color: white;
            text-align: center;
            border-radius: 3px;
            position: relative;
            i{
              font-size: 1.3rem;
              text-align: center;
              padding-top: 0.1rem;
            }
          }
        }

        .active{
          display:block;
          width:224px;
          font-size: .8rem;
          position:absolute;
          right:0;
          top: 3rem;
          background-color:#0a0a0a;
          padding: 1rem 0;
          border-radius:5px;

          p{
            padding:5px 20px;
            color: #b2b2b2;
            font-weight:700;
            cursor:pointer;
          }
        }

        .not-active{
          display:none;
        }
    }
  }
`
