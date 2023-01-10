import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { songTitle } from '../data';
import styled from 'styled-components';
import { Footer, Header, Sidebar } from '../components';
import { API_BaseURL, DataContext } from '../Context';

const About = () => {


  const params = useParams();
  const id = params?.id;
  const context = useContext(DataContext)
  console.log(context)

  const {setState} = context
  const {songTitle} = context.state

  //Matching ID
  const data = songTitle.find((song:any) => song.id === id)

  console.log(data);
  

  //for heart icon
  const [isLiked, setLiked ]= useState(data?.liked)
  const updateLiked = ()=> {
    setLiked(!isLiked)
    const newSongs = [...songTitle].map(song => song.id === id ? {...song, liked: !isLiked} : song)
    setState({...context.state, songTitle: newSongs })
  }
  console.log(updateLiked)


  return (
    <StyledHome>
        <Sidebar/>
          <StyledContWrap>
            <Header/>
            <StyledHero>
              <div className="wrapper">
                <div className="imgWrap">
                    <img src={`${API_BaseURL}img/${data?.imgs}`} alt="Image" />
                </div>
                <div className="songInfo">
                  <div className="type">
                    <p>SINGLE</p>
                  </div>
                  <div className="songTtl">
                    <p>{data?.songs}</p>
                  </div>
                  <div className="artistInfo">
                    <p>
                      <span className="name">{data?.artist}</span>
                      <span className="year">• 2017 </span>
                      <span className="song">• 1 song, 3 min 40 sec</span>
                    </p>
                  </div>
                </div>
              </div>
            </StyledHero>

            <StyledAboutSong>
              <div className="icons">
                <div className="play">
                  <i className="fas fa-play-circle"></i>
                </div>
                <div className="fave">
                  <i onClick={()=> {updateLiked()}} className={`${!isLiked ? 'far fa-heart' : 'fas fa-heart'}`}></i>
                </div>
                <div className="more">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <div className="title">
                <div className="ttlHeading">
                  <p># <span>TITLE</span></p>
                  <i className="far fa-clock"></i>
                </div>
                <div className="ttlInfo">
                  <div className="num">
                    <p>1</p>
                  </div>
                  <div className="name">
                    <p className="song">{data?.songs}</p>
                    <p className="artist">{data?.artist}</p>
                  </div>
                  <div className="time">
                    <p>3:40</p>
                  </div>
                </div>
              </div>
              <div className="license">
                <p>
                    ℗ 2016 STMPD RCRDS B.V. exclusively licensed to Epic Amsterdam, a divison of Sony Music Entertainment Netherlands B.V.
                </p>
              </div>
            </StyledAboutSong>
          </StyledContWrap>
        <Footer/>
    </StyledHome>
  )
}

export default About


const StyledHome = styled.div`
  background-color: #1e1e1e;
  width:100%;
  display: flex;
`

const StyledContWrap = styled.div`
  width: 88%;
  height: 100vh;
  overflow-y: scroll;
  @media screen and (max-width: 425px){
    width: 100%;
  }
  
`

const StyledHero = styled.section`
background: rgb(122,113,113);
background: linear-gradient(13deg, rgba(122,113,113,1) 0%, rgba(211,195,195,1) 100%);
padding: 4rem 0 1rem 0;

.wrapper{
    display: flex;
    margin: 1.3rem;
    
    .imgWrap{
        width: 200px;
        height: auto;
        margin-right: 24px;
        box-shadow: 0 4px 60px #00000080;
        img{
            width: 100%;
            background-size: cover;
        }
    }

    .songInfo{
        color: white;
        justify-content: flex-end;
        display: flex;
        flex-direction: column;
        .type{
            p{
                font-size: .7rem;
                font-weight: 700;
            }
        }
        .songTtl{
            p{
                font-size: 5rem;
                font-weight: 700;
                @media screen and (max-width: 768px){
                  font-size: 3rem;
                }
                @media screen and (max-width: 425px){
                  font-size: 1.5rem;
                }
            }
        }

        .artistInfo{
            p{
                .name, .year{
                    font-weight: 700;
                }
            }
        }
    }
  }
`


const StyledAboutSong = styled.section`
  background: rgb(85,79,79);
  background: linear-gradient(180deg, rgba(85,79,79,1) 0%, rgba(30,30,30,1) 100%);
    .icons{
        color: #b2b2b2;
        display: flex;
        align-items: center;
        .play{
            margin: 1.3rem;
            i{
                font-size: 3.5rem;
                background-color: black;
                border-radius: 50%;
                color: #1ed760;
            }
        }
        .fave,.more{
            margin: 1rem;
            cursor: pointer;
            i{
                font-size: 1.8rem;
                
            }
        }

    }
    .title{
        margin: 0 1.3rem;
        .ttlHeading{
            display: flex;
            justify-content: space-between;
            color: #b2b2b2;
            padding-bottom: .8rem;
            border-bottom: 1px solid #424040;
            p{
                padding-left: 1rem;
                font-size: 1rem;
                
                span{
                    padding-left: .5rem;
                    font-size: .8rem;
                }
            }
            i{
                padding-right: 3rem
            }
            
        }
        .ttlInfo{
            display: flex;
            align-items: center;
            margin: 0 1rem;
            padding-top: 1rem;
            .num{
                padding-right: 0.9rem;
                p{
                    font-size: 1rem;
                    color: #b2b2b2;
                }
            }
            .name{
                .song{
                    color: white;
                    font-size: 1rem;
                    font-weight: 700;
                }
                .artist{
                    color: #b2b2b2;
                    font-size: 1rem;
                }
            }
            .time{
                margin-left: auto;
                padding-right: 1.5rem;
                p{
                    color: #b2b2b2;
                }
            }
        }
    }
    .license{
        margin: 0 1.3rem;
        padding: 1rem 0;
        p{
            font-size: .7rem;
            color: #b2b2b2;
        }
    }

  }
`