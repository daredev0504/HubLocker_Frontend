import {
    SEARCH_LOCATION,
  VALIDATE_AGE,
  VALIDATE_EMPTY,
  REMOVE_LOCATION,
  FIELD,
  CLEAR_ERRORS,
  AUTH_ERROR,
} from "../../types";

export const reducer = (state, action) => {
  //const newLocation = [...state.location, action.payload];

  switch (action.type) {
    case SEARCH_LOCATION:
      return {
        ...state,
        isModalOpen: true,
        severity: "success",
        modalContent: "ADDED SUCCESSFULLY",
        location: action.payload,
      };
    case VALIDATE_AGE:
      return {
        ...state,
        IsModalOpen: true,
        severity: "error",
        modalContent: "your age must be a number",
      };
    case VALIDATE_EMPTY:
      return {
        ...state,
        isModalOpen: true,
        severity: "error",
        modalContent: "please enter a value",
      };
    case AUTH_ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: "No lockers in the location"
        
      };
       case CLEAR_ERRORS:
      return {
        ...state,
        isError: false,
        errorMessage: "Ignore me ooo"
        
      };
    case FIELD:
      return {
        ...state,
        [action.field]: action.payload,
      };
    case REMOVE_LOCATION:
      const filter = state.people.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        people: filter,
        isModalOpen: true,
        modalContent: "removed successfully",
        severity: "success",
      };
    default:
  }
  return state;
};
