const state = {
  counter: 0,
  contactList: [
    {
    firstName: "Ben",
    lastName: "Turner",
    phone: "555-555-5555"
  },
    {
    firstName: "Nonnie",
    lastName: "Martin",
    phone: "666-666-6666"
  },
    {
    firstName: "Cookie",
    lastName: "Monster",
    phone: "444-444-4444"
  }
]
}

const reducer = function(prevState = state, action) {
  switch(action.type){
    case "ADD_ONE":
    return{
      counter: prevState.counter + 1,
      contactList: prevState.contactList
    }
    case "MINUS_ONE":
    return{
      counter: prevState.counter - 1,
      contactList: prevState.contactList
    }
    case "RESET":
    return{
      counter: 0,
      contactList: prevState.contactList
    }
    case "REMOVE_NAME":
    let newList = [...prevState.contactList];
    newList.shift();
    return {
      counter: prevState.counter,
      contactList: newList
    }
    default:
    return prevState
  }
}

export default reducer;