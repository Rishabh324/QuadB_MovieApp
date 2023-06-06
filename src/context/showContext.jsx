import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
export const showsContext = createContext();

export const ShowContextProvider = ({ children }) => {
    const INITIAL_STATE = {
        shows: [],
        singleShow: {},
        loading: false
    }

    const showReducer = (state, action) => {
        switch (action.type) {
            case "SET_LOADING":
                return {
                    ...state,
                    loading: true
                }
            case "SEARCH_SHOWS":
                return {
                    ...state,
                    shows: action.payload,
                    loading: false
                }
            case "SET_SINGLE_SHOW":
                return {
                    ...state,
                    singleShow: action.payload,
                    loading: false
                }
            case "CLEAR_SINGLE_SHOW":
                return {
                    ...state,
                    singleShow: {}
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(showReducer, INITIAL_STATE);

    const searchShows = async (searchShow) => {
        dispatch({ type: 'SET_LOADING' });

        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchShow}`);

        dispatch({
            type: 'SEARCH_SHOWS',
            payload: data,
        })

        console.log(data);
    }

    const getSingleShow = async (id) => {
        dispatch({
            type: "SET_LOADING"
        })

        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log(data);
        dispatch({
            type: "SET_SINGLE_SHOW",
            payload: data,
        });
    }

    const clearSingleShow = () => {
        dispatch({
            type: "CLEAR_SINGLE_SHOW"
        })
    }

    return (
        <showsContext.Provider value={{
            shows: state.shows,
            singleShow: state.singleShow,
            loading: state.loading,
            searchShows,
            getSingleShow,
            clearSingleShow
        }}>
            {children}
        </showsContext.Provider>
    )
}