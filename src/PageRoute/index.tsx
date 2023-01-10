import { Routes, Route, useNavigate} from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Library from "../pages/Library";
import About from "../pages/About";
import Liked from "../pages/Liked";
import Playlist from "../pages/Playlist";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context";
import { FadeLoader} from 'react-spinners'
import styled from "styled-components";


const CustomPage = ({RenderPage, isProtected}: any) => {
    const context = useContext(DataContext)
    const { isLoggedIn } = context.state
    const navigate = useNavigate();

    const [state, setState] = useState('loading')

    useEffect(() => {
        setState('done')
        if(isProtected && !isLoggedIn) {
            navigate('/login')
        }
        else if(!isProtected && isLoggedIn) {
            navigate('/')
        }
        else{
            <RenderPage/>
        }
    },[isProtected, isLoggedIn, navigate, RenderPage])

    return (
        <>
            {state === 'loading' ? (
                <StyledLoader>
                    <FadeLoader color="#1DB954"/>
                </StyledLoader>
            ) : 
               <RenderPage /> 
            } 
        </>
    )
}

const AccountTest = () => {
    return <div>account</div>
}

const Login = () => {
    const context = useContext(DataContext)
    const navigate = useNavigate();
    const { setState } = context
    const newLogin = (e:any) => {
        // alert('New Login')
        // e.preventDefault()
        setState({
            ...context.state, isLoggedIn : true,  
          })
          navigate('/')
    } 

    console.log();
    
    
    
    return (
        <>
            <StyledLoginLogo className="logo">
                <i className="fab fa-spotify spotify"></i>
                <p>Spotify</p>
                <i className="far fa-registered r"></i>
            </StyledLoginLogo>
            <StyledForm action="" onSubmit={(e)=> {newLogin(e)}}>
                <label>Username</label>
                <input type="text" name="Username" />
                <label>Password</label>
                <input type="password" name="Password" id="22" />
                <input type="submit" value="Login"/>
            </StyledForm>
        </>
        
    )
    
    
}

const PageRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/login" element={<CustomPage isProtected={false} RenderPage={Login}/>} />
                <Route path='/account'  element={<CustomPage isProtected={true} RenderPage={AccountTest} />} />
                <Route path='/search'  element={<CustomPage isProtected={true} RenderPage={Search} />} />
                <Route path='/library'  element={<CustomPage isProtected={true} RenderPage={Library} />} />
                <Route path='//album/:id'  element={<CustomPage isProtected={true} RenderPage={About} />} />
                <Route path='/likedSongs'  element={<CustomPage isProtected={true} RenderPage={Liked} />} />

            </Routes>
        </div>
    )
}

export default PageRoute

const StyledLoader = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`


const StyledLoginLogo = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
    width: 100vw;
    justify-content: center;
    padding: 1.9rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    .spotify {
        font-size: 4rem;
        color: #000;
    }
    p {
        padding-left: 0.2rem;
        font-size: 2.5rem;
        font-weight: 700;
    }
    .r {
        font-size: .5rem;
        padding-bottom: 1.3rem;
    }
    
`

const StyledForm = styled.form`
    width: 25rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin: 0 auto;
    padding: 10rem 0;
    input[type=text],input[type=password]{
        padding: 7px 0;
        margin-bottom: 1rem;
    }

    input[type=submit]{
        padding: 10px 0;
        background-color: #1DB954;
        border: none;
        border-radius: 50px;
        width: 8rem;
        outline: none;
    }

`