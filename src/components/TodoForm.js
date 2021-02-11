import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task)
        this.setState({
            ...this.state,
            task: '',
        })
    }



    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    value={this.state.task}
                />
                <button type="submit">Add ToDo</button>
                <button type="button" onClick={() => this.props.clearCompleted()}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;