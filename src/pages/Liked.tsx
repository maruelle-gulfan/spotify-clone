import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Content, Footer, Header, Sidebar } from '../components'
import { API_BaseURL, DataContext } from '../Context'

const Liked = () => {

  const context = useContext(DataContext)
  const navigate = useNavigate()
  const songss = [...context.state.songTitle.filter((song:any) => song.liked)]

  return (
    <StyledLiked>
        <Sidebar />
        <StyledContent>
        <Header/>
            {songss.length <= 1 ? 
            
            <StyledLikeIndicator>
                You have liked {songss.length} song
            </StyledLikeIndicator>
            :

            <StyledLikeIndicator>
                You have liked {songss.length} songs
            </StyledLikeIndicator>

            }
          { 
            songss.length !== 0 ? (
                <StyledArtist>
                  {songss.map(d => (
                    <div className="playlist">
                          <div onClick={()=> navigate(`/album/${d.id}`)} className="card">
                            <div className="imgWrapper">
                              <img src={`${API_BaseURL}img/${d.imgs}`} alt="Image" />
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
                    </div>
                  
                  ))}
              </StyledArtist>
            ) :
            <div>
                
            </div>
          }
        </StyledContent>
        <Footer/>
    </StyledLiked>
  )
}

export default Liked

const StyledLiked = styled.div`
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
`
const StyledLikeIndicator = styled.div`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: white;
`

const StyledListLiked = styled.div`
  width: 100%;
  display: flex;
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

const StyledArtist = styled.div`
  width:100%;
  display: flex;
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