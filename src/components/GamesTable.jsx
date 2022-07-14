import React from "react";
import './gamesTable.css';

const url = 'https://gruppe3.toni-barth.com/';

class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            games: []
        };
    }

    componentDidMount() {
        fetch(url + 'games/')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        games: result
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
        const {error, isLoaded, games} = this.state;
        if (error) {
            return <tbody><tr><th>Error: {error.message}</th></tr></tbody>;
        } else if (!isLoaded) {
            return <tbody><tr><th>Lade...</th></tr></tbody>;
        } else {
            return (
                <tbody>
                    {games.map(game => (
                        <tr key={game.id}>
                            <th>{game.id}</th>
                            <th>{game.running}</th>
                            <th>{game.currentWord}</th>
                            <th>{game.players}</th>
                            <th>{game.owner}</th>
                            <th>{game.winner}</th>
                            <th>{game.points}</th>
                        </tr>
                    ))}
                </tbody>
            )
        }
    }
}

export const GamesTable = () => {
    return (
    <table className="tableGames">
        <thead>
            <tr>
                <th>ID</th>
                <th>Running</th>
                <th>Current Word</th>
                <th>Players</th>
                <th>Owner</th>
                <th>Winner</th>
                <th>Points</th>
            </tr>
        </thead>
        <TableData />
    </table>
    );
}