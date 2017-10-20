const redux = require("redux");

const state = {
  counter: 0,
  contactList: []
}

function addOne(){
  return {
    type: "ADD_ONE"
  }
}

function subOne(){
  return {
    type: "SUB_ONE"
  }
}

function reset(){
  return{
    type: "RESET"
  }
}

function custom(num){
  return{
    type: "CUSTOM",
    input: num
  }
}

function addName(name){
  return{
  type: "ADD_NAME",
  name
}
}

function removeName(){
  return {
    type: "REMOVE_NAME"
  }
}

function reducer(prevState = state, action){
  switch(action.type){
    // case "ADD_ONE":
    //   return {
    //   counter: prevState.counter + 5
    // }
    //   case "SUB_ONE":
    //   return {
    //     counter: prevState.counter - 1
    // }
    case "CUSTOM":
    return {
      contactList: prevState.contactList,
      counter: prevState.counter + action.input
    }
    case "RESET":
    return {
      contactList: prevState.contactList,
      counter: 0
    }
    case "ADD_NAME":
    return {
      contactList: [...prevState.contactList, action.name],
      counter: prevState.counter
    }
    case "REMOVE_NAME":
    let newList = [...prevState.contactList];
    newList.shift();
    return {
      contactList: newList,
      counter: prevState.counter
    }
    default:
      return prevState
  }
}


const store = redux.createStore(reducer);

store.subscribe(()=>{
  console.log(store.getState());
})

// store.dispatch(addOne());
// store.dispatch(subOne());
// store.dispatch(custom(5));
store.dispatch(addName("nonnie"));
store.dispatch(addName("arles"));
store.dispatch(addName("kit"));
store.dispatch(removeName());
