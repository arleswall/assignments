const bounties = function(prevBounties = [], action){
  let newBounties = [...prevBounties];
  switch(action.type){
    case "ADD_BOUNTY":
    newBounties.push(action.bounty)
    return newBounties;
    
    case "LOAD_BOUNTIES":
    return action.bounties;
    
    case "DELETE_BOUNTY":
    return newBounties.filter((bounty)=>{
      return action.id !== bounty._id;
    })
    
    case "EDIT_BOUNTY":
    return newBounties.map((bounty)=>{
      if(action.id === bounty._id){
        return action.editedBounty;
      } else {
        return bounty
      }
    })
    default:
    return prevBounties
  }
}

export default bounties;