import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
// import { useContext } from 'react';

let API = "https://hn.algolia.com/api/v1/search?";


const initialState = {
    isLoading : true,
    query : "CSS",
    nbPages: 0,
    page: 0,
    hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    // const [state, setstate] = useState(initialState);

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {

        dispatch({type:"SET_LOADING"});

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data); 
            // isLoading = false;
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            });
        } catch(error){
            console.log(error);
        }
    };

    //  remove the post
    const removePost = (post_ID) =>{
        dispatch({type: "REMOVE_POST", payload: post_ID});
    };

        // search
    const searchPost = (searchQuery) =>{
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,
        });
    }     

    // pagination
    const getNextPage = () =>{
        dispatch({
            type: "NEXT_PAGE",
        })
    }

    const getPrevPage = () =>{
        dispatch({
            type: "PREV_PAGE",
        })
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);
    // and above [state.query] works when reading the data from input user and 
    // also refressh it

    return (
    <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage  }}>
        {children}
    </AppContext.Provider>
    );
};

// custom hook create

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};

