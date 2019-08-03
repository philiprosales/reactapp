import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch("https://testreacttodoapp.herokuapp.com/todos")
      .then(response => response.json())
      .then(todos =>
        this.setState({
          todos: todos
        })
      );
  }

  handleSubmit = e => {
    const newTodo = e.target.querySelector("input").value;

    console.log(newTodo);
    console.log(this);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          title: newTodo
        }
      ]
    });

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Todo list</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="What needs to be done?" />
        </form>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;