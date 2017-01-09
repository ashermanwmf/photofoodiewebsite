export default (state = [], action) =>{
  switch(action.type){
    case "INITIAL_PHOTO_CALL":
      // add the initial photos to the state array
      const newState = state.concat(action.payload);

      console.log(newState, 'reducer, newState');

      return action.payload;
    default:
      return state;
  }
};
