import React, { useContext, useEffect, useState } from 'react'
import { Header } from '..'
import { API_BaseURL, DataContext, IState } from '../../Context';
import styled from 'styled-components';
import { songTitle } from '../../data';
import { useNavigate } from 'react-router-dom';
import { FadeLoader} from 'react-spinners'

const Content = () => {
// UseStataes
  const context:IState = useContext(DataContext)
  const [artists, setArtists] = useState(context.state.songTitle)
  const [songss, setSongss] = useState(context.state.songTitle)
  
// Navigation
  const navigate = useNavigate()

  const { searchValue = '', isSearching, isLoading} = context?.state

//Search Result
  useEffect(() => { 
    
    const newArtist = [...context.state.songTitle].filter(d =>  d.artist.toLowerCase().match(searchValue.toLowerCase()) !== null)
    setArtists(newArtist)
    

    const newSongs = [...context.state.songTitle].filter(d =>  d.songs.toLowerCase().match(searchValue.toLowerCase()) !== null)
    setSongss(newSongs)
  }, [searchValue, context.state])

// Loading
  useEffect(() => {
    if(isLoading){
      setTimeout(()=> {
        context.setState({
          ...context.state, isLoading : false
        })
      },600)
    }
  }, [isLoading, context])

  return (
    <StyledContent>
      <Header />
      <div>
          {
            isLoading && 
            (
              <StyledLoader>
                <FadeLoader color='#1DB954'/>
              </StyledLoader>
            )
          }
          
          {isSearching && !isLoading && (
            <div>
                <StyledSearchVal>
                  You have search for "{searchValue}"
                </StyledSearchVal>

                <div>
                  <StyledHeading className="heading">
                    <a href="#">
                      <p className='ttl'>Artist</p>
                    </a>
                    <a href="#">
                      <p>SEE ALL</p>
                    </a>
                  </StyledHeading>
                </div>

                {artists.length ===0 &&
                  <StyledWarning>
                    Not Found
                  </StyledWarning>
                }
                <StyledArtist>
                    <div className="playlist">
                      {artists.map((d) =>{
                        return (
                          <div onClick={()=> navigate("/album/"+d.id)} className="card">
                              <div className="imgWrapper">
                                <img src={`${API_BaseURL}img/${d.imgs}` } alt="Image" />
                              </div>
                              <div className="songWrapper">
                                <p>
                                  {d.artist}
                                </p>
                              </div>
                              <div className="artistWrapper">
                                <p>
                                    Artist
                                </p>
                              </div>
                          </div>   
                        )   
                      })}
                    </div>
                </StyledArtist>

                <div>
                  <StyledHeading className="heading">
                    <a href="#">
                      <p className='ttl'>Songs</p>
                    </a>
                    <a href="#">
                      <p>SEE ALL</p>
                    </a>
                  </StyledHeading>
                </div>

                {songss.length ===0 &&
                  <StyledWarning>
                    Not Found
                  </StyledWarning>
                }

                <StyledArtist>
                  <div className="playlist">
                    {songss.map((d) =>{
                      return (
                        <div onClick={()=> navigate("/album/"+d.id)} className="card">
                            <div className="imgWrapper">
                              <img src={`${API_BaseURL}img/${d.imgs}` } alt="Image" />
                            </div>
                            <div className="songWrapper">
                              <p>
                                {d.songs}
                              </p>
                            </div>
                            <div className="artistWrapper">
                              <p>
                                {d.artist}
                              </p>
                            </div>
                        </div>   
                      )   
                    })}
                  </div>
                </StyledArtist>   
            </div>
          )}

          {!isSearching && !isLoading &&  (
            <div>
              <StyledHeading className="heading">
                <a href="#">
                  <p className='ttl'>Songs for you</p>
                </a>
                <a href="#">
                  <p>SEE ALL</p>
                </a>
              </StyledHeading>

              <StyledArtist>
                <div className="playlist">
                  {artists.map((d) =>{
                    return (
                      <div onClick={()=> navigate(`/album/${d.id}`)} className="card">
                        <div className="imgWrapper">
                          <img src={`${API_BaseURL}img/${d.imgs}` } alt="Image" />
                        </div>
                        <div className="songWrapper">
                          <p>
                            {d.songs}
                          </p>
                        </div>
                        <div className="artistWrapper">
                          <p>
                            {d.artist}
                          </p>
                        </div>
                      </div> 
                  )})}
                </div>
              </StyledArtist>

              <StyledHeading className="heading">
                <a href="#">
                  <p className='ttl'>Songs for you</p>
                </a>
                <a href="#">
                  <p>SEE ALL</p>
                </a>
              </StyledHeading>

              <StyledArtist>
                <div className="playlist">
                  {artists.map((d) =>{
                    return (
                      <div onClick={()=> navigate(`/album/${d.id}`)} className="card">
                        <div className="imgWrapper">
                          <img src={`${API_BaseURL}img/${d.imgs}` } alt="Image" />
                        </div>
                        <div className="songWrapper">
                          <p>
                            {d.songs}
                          </p>
                        </div>
                        <div className="artistWrapper">
                          <p>
                            {d.artist}
                          </p>
                        </div>
                    </div> 
                  )})}
                </div>
              </StyledArtist>

              <StyledHeading className="heading">
                <a href="#">
                  <p className='ttl'>Songs for you</p>
                </a>
                <a href="#">
                  <p>SEE ALL</p>
                </a>
              </StyledHeading>

              <StyledArtist>
                <div className="playlist">
                  {artists.map((d) =>{
                    return (
                      <div onClick={()=> navigate(`/album/${d.id}`)} className="card">
                        <div className="imgWrapper">
                          <img src={`${API_BaseURL}img/${d.imgs}` } alt="Image" />  
                        </div>
                        <div className="songWrapper">
                          <p>
                            {d.songs}
                          </p>
                        </div>
                        <div className="artistWrapper">
                          <p>
                            {d.artist}
                          </p>
                        </div>
                      </div> 
                    )})}
                </div>
              </StyledArtist>
            </div>
          )}
      </div>
    </StyledContent>
  )
}

export default Content

const StyledSearchVal = styled.p`
  margin: 5rem 2.5rem 0 1rem ;
  font-size:.8rem;
  color:#b2b2b2;
`
const StyledLoader = styled.div`
  width: calc( 100% - 5%);
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
          width: 100%;
          height: 80vh;
        }
`

const StyledContent = styled.div`
  width: 88%;
  height: 100vh;
  overflow-y:scroll;
  @media screen and (max-width: 425px) {
          width: 100%;
          overflow-y:scroll;
        }
`
const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 2.5rem 0 1rem ;
  a {
    text-decoration: none;
    color: white;
    .ttl {
        color: white;
        font-size:1.4rem;
        &:hover{
            text-decoration: underline;
        }
    }
    p {
        color: #b2b2b2;
        font-size: .7rem;
        font-weight: 700;
        &:hover{
            text-decoration: underline;
        }
    }
  }
`

const StyledArtist = styled.div`
  width:100%;
  &:last-child {
    padding-bottom:10rem;
  }
  .playlist {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 425px) {
          justify-content: space-evenly;
        }
    .card {
        padding: 1rem;
        background-color: #181818;
        border-radius: .3rem;
        margin-bottom: 1rem;
        margin-left:1rem;
        width: 185px;
        @media screen and (max-width: 1500px) {
          width: 18%;
        }
        @media screen and (max-width: 1200px) {
          width: 30%;
        }
        @media screen and (max-width: 768px) {
          width: 45%;
        }

        @media screen and (max-width: 550px) {
          width: 100%;
        }
        cursor:pointer;
        .imgWrapper {
            width: 100%;
            
            img{
                width: 100%;
                border-radius: .3rem;
            }
        }
        .songWrapper {
                
            p{
                color: white;
                font-size: 1rem;
                padding: 1rem 0 .5rem 0;
                font-weight: 700;
                white-space: nowrap; 
                text-overflow: ellipsis;
                overflow-x: hidden;
                width: 150px;
                
            }
        }
        .artistWrapper {
            min-height: 2rem;
            p{
                color: #b2b2b2;
                font-size: .8rem;
            }
        }

        &:hover {
            background-color: #282828;
        }
    }
  }
  }
`

const StyledWarning = styled.p`
  font-size:1.1rem;
  color: red;
  margin-left: 1rem;
`