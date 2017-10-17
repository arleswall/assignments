import React from "react";
import axios from "axios";
import ItemContainer from "./ItemContainer";
import TodoAdd from "./TodoAdd";

class TodoList extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: "",
      description: ""
    }
    this.deleteButton = this.deleteButton.bind(this);
    this.addButton = this.addButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }
  
  componentDidMount(){
    axios.get('https://api.vschool.io/arles/todo').then(response => {
      this.setState({
        todos: response.data.reverse()
      })
    })
  }
  
  handleChange(event){
    this.setState({
      newTodo:{
        ...this.state.newTodo,
        [event.target.name]: event.target.value
      }
    })
  }
  
  addButton(e){
    e.preventDefault();
axios.post('https://api.vschool.io/arles/todo/', this.state.newTodo).then(response=>{
  this.setState(prevState=>{
    return{
    todos: [response.data, ...prevState.todos],
    newTodo: {
      title: "", 
      description: ""
    }
  }
})
})}
  
  deleteButton(id){
    axios.delete(`https://api.vschool.io/arles/todo/${id}`).then(item => {
      this.setState(prevState => {
      const newArr=  prevState.todos.filter(item => item._id !== id)
          return{
            todos: newArr
          }
        })
      }
    )}
    
    editTodo(id, editedTodo){
      axios.put(`https://api.vschool.io/arles/todo/${id}`, editedTodo).then((response)=>{
        let newEdit = response.data;
        this.setState((prevState)=>{
          const newTodos = prevState.todos.map((todo)=>{
            if(todo._id === id) {
              return newEdit
            } else {
              return todo;
            }
          })
          return {
            todos: newTodos
          }
        })
      })
    }
  
  
  render(){
    return (
      <div>
        <div>
          <TodoAdd
              newItem={this.state.newTodo.name}
              handleChange={this.handleChange}
              addButton={this.addButton}
              />
          </div>
        {this.state.todos.map((todos)=>{
        return(
        <ItemContainer 
                todo={todos}
                deleteButton={this.deleteButton}
                key={todos._id}
                />
    )}
  )}
      </div>
 )}
}


export default TodoList;