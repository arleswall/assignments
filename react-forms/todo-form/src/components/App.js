import React from "react";
import TodoList from "./TodoList";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoList: "",
      savedItem: []
    }
    this.todoClick = this.todoClick.bind(this);
    this.todoChange = this.todoChange.bind(this);
  }

todoClick(){
this.setState(prevState =>{
return {savedItem: [...prevState.savedItem, this.state.todoList],
  todoList: ""
  }
})
}

todoChange(event){
this.setState({
  todoList: event.target.value
})
}


  render(){
    return(
    <TodoList display={this.todoChange}
              boxText={this.state.todoList}
              button={this.todoClick}
              saved={this.state.savedItem}/>
            )
  }
}


export default App;
