// connect loadTodos and todos from state
// map and render
// loadtodos compdidmount
import React from "react";
import {connect} from "react-redux";
import ListComponent from "./todo/ListComponent";
import {todos} from "../../redux/actions/"


class TodoList extends React.Component{
  constructor(){
    super();

    this.genList = this.genList.bind(this);
  }
  
  componentDidMount(){
    this.props.loadTodos();
  }
  
  genList(){
    return this.props.todos.map((todo, index)=>{
      return  <ListComponent
                      key={todo.title + index}
                      todo={todo}
                      index={index}/>
      
    })
  }
  
  render(){
    return(
          <div>
                <h4>{this.genList()}</h4>
                
          </div>
      )
  }
}

const mapStateToProps = (state)=>{
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, todos) (TodoList);
