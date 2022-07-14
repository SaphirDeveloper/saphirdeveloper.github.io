import React from "react";
import './highscoreTable.css';

const url = 'https://gruppe3.toni-barth.com/';

export class UserIDInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", player: null, error: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let playerID = this.state.value;
            
        fetch(url + 'players/' + playerID + '/')
            .then(response => response.json())
            .then(result => {this.setState({player: result, error: null});})
            .catch(error => {this.setState({error, player: null});});

        event.preventDefault();
    }

    printMessage() {
        if (this.state.player != null && this.state.player.name != null) {
            return (<p>User: {this.state.player.name}</p>);
        }
        else if (this.state.error != null) {
            return (<p>Error: {this.state.error.message}</p>);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User ID:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Bestätigen" />
                {this.printMessage()}
            </form>
        )
    }
}
