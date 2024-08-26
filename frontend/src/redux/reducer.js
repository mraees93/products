const SET_INDEX = 'SET_INDEX';

export function setImageIndex(idx) {
    return { type: SET_INDEX, payload: idx };
  }

  const initialState = {
    imageIndex: undefined
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_INDEX:
        return { ...state, imageIndex: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;