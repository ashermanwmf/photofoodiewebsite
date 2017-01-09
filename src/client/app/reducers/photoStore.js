export default (state = [], action) =>{
  switch(action.type){
    case "INITIAL_PHOTO_CALL":
      const newState = state.concat(action.payload);

      return newState;
    case "ADDITIONAL_PHOTO_CALL":
      const updatedState = state.concat(action.payload);

      return updatedState;
    default:
      return state;
  }
};
