import React from "react";
import './highscoreTable.css';

const url = 'https://gruppe3.toni-barth.com/';

class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            players: []
        };
    }

    componentDidMount() {
        fetch(url + 'players/')
            .then(response => response.json())
            .then(
                (result) => {
                    let index = 1;
                    while(index < result.length) {
                        if (index > 0 && result[index].bestPoints > result[index - 1].bestPoints) {
                            let swap = result[index - 1];
                            result[index - 1] = result[index];
                            result[index] = swap;
                        } else {
                            index++;
                        }
                    }

                    this.setState({
                        isLoaded: true,
                        players: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, players} = this.state;
        if (error) {
            return <tbody><tr><th>Error: {error.message}</th></tr></tbody>;
        } else if (!isLoaded) {
            return <tbody><tr><th>Lade...</th></tr></tbody>;
        } else {
            return (
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <th> {player.id}</th>
                            <th>{player.name}</th>
                            <th>{player.bestPoints}</th>
                            <th>{player.bestCharsPerSecond}</th>
                        </tr>
                    ))}
                </tbody>
            )
        }
    }
}

export const HighscoreTable = () => {
    return (
    <table className="tableHighscores">
        <thead>
            <tr>
                <th>ID</th>
                <th>Spielername</th>
                <th>Beste Punktzahl</th>
                <th>Beste Schreibgeschwindigkeit</th>
            </tr>
        </thead>
        <TableData />
    </table>
    );
}