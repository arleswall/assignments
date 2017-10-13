import React from "react";
import TodoItem from "./TodoItem"
import axios from "axios";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
    todos: [],
    newTodo:{
      title:"",
      description:""
    }

    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postTodo = this.postTodo.bind(this);
  }
  componentDidMount(){
    axios.get("https://api.vschool.io/arles/todo").then(response =>{
      this.setState({
        todos: response.data.reverse()
      })
    })
  }
  postTodo(){
    axios.post("https://api.vschool.io/arles/todo", this.state.newTodo).then(response=>{
    this.setState(prevState=>{
      return{
       todos: [response.data, ...prevState.todos]
      }})  
    })
  }
  deleteTodo(id){
    axios.delete(`https://api.vschool.io/arles/todo/${id}`).then(response=>{
      this.setState(prevState=>{
        const newArr = prevState.todos.filter(item => item._id !== id)
        return {
          todos: newArr
        }
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

  render(){
    return(
      <div>
      <input 
      type="text"
      placeholder="title"
      name="title"
      value={this.state.newTodo.title}
      onChange={this.handleChange}
      />
      <button onClick={this.postTodo}>Add</button>
        {this.state.todos.map((item, i)=>{
          return(
            <TodoItem
            todo={item}
            key={item.title + i}
            deleteTodo={this.deleteTodo}
            />
          )
        })}
      </div>
    )
  }
}

export default App;