import React from "react";
import axios from "axios";
import TodoItems from "./TodoItems";
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
  
  addButton(){
axios.post('https://api.vschool.io/arles/todo/', this.state.newTodo).then(response=>{
  this.setState(prevState=>{
    return{
    todos: [response.data, ...prevState.todos]
  }})
})
  }
  
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
        {this.state.todos.map((item)=>{
        return(
        <TodoItems 
                items={item}
                deleteButton={this.deleteButton}
                />
    )}
  )}
      </div>
 )}
}


export default TodoList;