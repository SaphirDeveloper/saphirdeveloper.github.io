import React from "react";
import {useNavigate} from "react-router-dom";
import './games.css';

const url = 'https://gruppe3.toni-barth.com/';

export class Games extends React.Component {
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
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Lade...</p>;
        } else if (games.length == 0) {
            return <p>Keine Lobby verfügbar</p>;
        } else {
            return (
                <div className="gameLobbyList">
                    {games.map(game => (
                        <ul className="gameLobby" key={"game_" + game.id} >
                            <li>{"Game ID: " + game.id}</li>
                            <li>{"Aktiv: " + game.running}</li>
                            <li>{"Spieleranzahl: " + game.players.length}</li>
                            <JoinLobbyButton gameID={game.id} />
                        </ul>
                    ))}
                </div>
            )
        }
    }
}

function JoinLobbyButton({gameID}) {
    let navigate = useNavigate();
    return (
        <button className="joinLobbyButton" onClick={ () => navigate("../gamelobby/" + gameID)}>Lobby beitreten</button>
    );
}
