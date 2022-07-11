import React from "react";
import './highscoreTable.css';

const url = 'https://gruppe3.toni-barth.com/';

export class UserNameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let player = this.state.value;

        if (player != null && player != "") {
            
            fetch(url + 'players/', {method: 'POST', headers: {'Content-Type':'application/json',}, body: JSON.stringify({name: player})})
                .then(response => {})
                .catch(ex => console.error(ex)); 
        }

        this.setState({value: ""});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Bestätigen" />
            </form>
        )
    }
}
