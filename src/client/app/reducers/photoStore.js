initialState = [];

export default (state = initialState, action) =>{
  switch(action.payload){
    case "INITIAL_PHOTO_CALL":
      // add the initial photos to the state array
    default:
      return state;
  }
};
