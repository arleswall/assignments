import React from "react";
import TodoItem from "./TodoItem";

class ItemContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleDisplay: false,
            editTodo: {
                title: props.todo.title,
                description: props.todo.description,
                completed: props.todo.completed
            }
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState((prevState)=>{
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            }
        })
    }

    handleEdit(event){
        event.persist();
        this.setState((prevState)=>{
            return {
                editTodo: {
                    ...prevState.editTodo,
                    [event.target.name]: event.target.type === "checkbox"? event.target.checked :event.target.value
                }
            }
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.editTodo(this.props.todo._id, this.state.editTodo);
    }
    render(){
        return (
            <TodoItem
                todo={this.props.todo}
                deleteTodo={this.props.deleteTodo}
                editedTodo={this.state.editTodo}
                handleEdit={this.handleEdit}
                handleSubmit = {this.handleSubmit}
                toggleDisplay = {this.state.toggleDisplay}
                handleToggle = {this.handleToggle}
                />
        )
    }
}
export default ItemContainer;