import img from '../assets/img/img1.jpeg'
import img2 from '../assets/img/img2.jpeg'
import img3 from '../assets/img/img3.jpeg'
import img4 from '../assets/img/img4.jpeg'
import img5 from '../assets/img/img5.jpeg'
import img6 from '../assets/img/img6.jpeg'
import img7 from '../assets/img/img7.jpeg'
import img8 from '../assets/img/img8.jpeg'
import { v4 as uid } from 'uuid';


export const data = [
    {

    }
]

export const logo = [
    {

        id: uid(),
        iconName:'fab fa-spotify spotify',
        iconName2:'far fa-registered r',
        name: 'Spotify',
        path:'/'
    }

]

export const links = [
    {

        id:uid(),
        iconName:'fas fa-home-lg-alt',
        name: 'Home',
        path:'/'
    },
    {

        id:uid(),
        iconName:'fas fa-search',
        name: 'Search',
        path:'/search'
    },
    {

        id:uid(),
        iconName:'fas fa-book-open',
        name: 'Your Library',
        path:'/library',
    },

]

export const links2 = [
    {

        id:uid(),
        iconName:'fas fa-plus-square',
        name: 'Create Playlist',
        path:'/playlist'
    },
    {

        id:uid(),
        iconName:'fas fa-heart',
        name: 'Liked Songs',
        path:'/likedSongs'
    },

]

export let songTitle = [
    {
        id:uid(),
        artist: 'Juphet',
        songs:'Paraluman',
        imgs: img,
        liked: false,
    },
    {
        id:uid(),
        artist: 'Maruelle',
        songs:'Grateful',
        imgs: img2,
        liked: false,
    },

    {
        id:uid(),
        artist: 'Junne',
        songs:`Here's Your Perfect`,
        imgs: img3,
        liked: false,
    },

    {
        id:uid(),
        artist: 'Ruston',
        songs:'Another',
        imgs: img4,
        liked: false,
    },
    {
        id:uid(),
        artist: 'John Lloyd',
        songs:'Stay',
        imgs: img5,
        liked: false,
    },
    {
        id:uid(),
        artist: 'John Rosell',
        songs:'Dance Monkey',
        imgs: img6,
        liked: false,
    },
    {
        id:uid(),
        artist: 'Adrian',
        songs:'Pagsamo',
        imgs: img7,
        liked: false,
    },
    {
        id:uid(),
        artist: 'Marni',
        songs:'Scared to Be Lonely',
        imgs: img8,
        liked: false,
    },


]