import React, { useReducer, useEffect } from "react";
import CreateSearchContext from "./SearchContext";
import { reducer } from "./SearchReducer";
import {
  REMOVE_LOCATION,
  SEARCH_LOCATION,
  AUTH_ERROR,
  FIELD,
  CLEAR_FIELD,
} from "../../types";
import axios from "axios";

const SearchState = (props) => {
  const initialState = {
    isModalOpen: false,
    isError: "",
    errorMessage: "",
    location: [],
    searchParameter: ""
  };
 const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(`api/location/withlockers?searchTerm=${state.searchParameter}`);
      dispatch({ type: SEARCH_LOCATION, payload: resp.data });
    } catch (error) {
      // Handle Error Here
      console.log(error);
      if (error){
        dispatch({ type: AUTH_ERROR });
      }
      
    }
  };
  //eslint-disable

  sendGetRequest();
}, [state.searchParameter])

  const handleChange = (event) => {
    dispatch({
      type: FIELD,
      field: event.target.name,
      payload: event.target.value,
    });
  };

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_LOCATION, payload: id });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
  };

  

  return (
    <CreateSearchContext.Provider
      value={{
        location: state.location,
        searchParameter: state.searchParameter,
        isModalOpen: state.isModalOpen,
        isError: state.isError,
        errorMessage: state.errorMessage,
        handleChange,
        handleRemove,
        handleSubmit,
      }}
    >
      {props.children}
    </CreateSearchContext.Provider>
  );
};

export default SearchState;
