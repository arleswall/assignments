import React from "react";
import TodoComponent from "./TodoComponent";
import axios from "axios";

class TodoList extends React.Component {
  constructor(){
    super();
    this.state = {
      TodoList: []
    }
  }
  
  componentDidMount(){
    axios.get('https://api.vschool.io/nonnie/todo').then((response)=> {
      this.setState({
        TodoList: response.data
      })
    })
  }
    render(){
      return this.state.TodoList.map((todo)=>{
        return (
            <TodoComponent
                description={todo.description}
                title={todo.title}
            />
      )
    })
    }
}


export default TodoList;