import React from 'react';

class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos : [],
            inputValue : ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("reached here in handle submit");
        this.setState(prevState => ({
                todos: [...prevState.todos, this.state.inputValue],
                inputValue: ''
          }));
        console.log('submitted a task')
    }

    handleChange = (event) =>{
        this.setState({ inputValue: event.target.value });
    }

    render(){
        return <div style={{ backgroundColor: '#f0f0f0', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>ToDo App</h1>
            <form onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
               
                <input id='task' name='submit' placeholder='Enter the task' required value={this.state.inputValue}
                onChange={this.handleChange} style={{ marginRight: '10px' }}>

                </input>
                
                <button type='submit'>submit</button>
            </form>
            
            <ul>
                {this.state.todos.map((todo, index) => (
                <li key={index}>{todo}</li>
                ))}

            </ul>
            
        </div> 
    }
}

export default ToDoApp;