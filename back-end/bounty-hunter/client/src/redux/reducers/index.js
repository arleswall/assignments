import bounties from "./bounties";

let state = {
  bounties: []
}

function reducer(prevState=state, action){
  return{
    bounties: bounties(prevState.bounties, action)
  }
}

export default reducer;