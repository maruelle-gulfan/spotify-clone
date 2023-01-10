import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { songTitle } from "../data";
// import { songTitle } from "../data"

const API_URL = 'http://localhost:4000/api'
export const API_BaseURL = 'http://localhost:4000/'

const api_config = {
    headers: {'X-Requested-With': 'XMLHttpRequest'},
};

export interface IContext {
    isSearching : boolean,
    searchValue ?: string,
    isSidebarShown: boolean,
    isLoading: boolean,
    isLoggedIn: boolean
    newUser: string
    songTitle : any[]
}

// Initial State
const initialState: IContext = {
    isSearching: false,
    searchValue: '',
    isSidebarShown:false,
    isLoading: true,
    songTitle: [],
    isLoggedIn: false,
    newUser: ''
}


export interface IState{
    state: IContext
    setState: React.Dispatch<React.SetStateAction<any & IContext>>
}

export const DataContext = createContext<IState & any>({})

const ContextProvider = (props:any) => {

    const [state, setState] = useState<IContext>(initialState)

    useEffect(() => {
        axios.get(API_URL, api_config).then(res => {
            if(res.status === 200){
                const {data} = res.data
                setState({...state, songTitle: data})
            }else{
                setState({...state, songTitle: songTitle})
            }
        }).catch(e => {
            console.log("error in fetching data:" + e);
        })
    }, [])
    
    return <DataContext.Provider value={{state: state, setState: setState}}>
        {props.children}
    </DataContext.Provider>
}

export default ContextProvider;
