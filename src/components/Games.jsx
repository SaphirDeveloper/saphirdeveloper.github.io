import React from "react";
import {useNavigate} from "react-router-dom";
import './games.css';

// API-URL
const url = 'https://gruppe3.toni-barth.com/';

// Show all available lobbys
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
        // Update component when fetch is done
        // Get all available lobbys
        fetch(url + 'games/')
            .then(response => response.json())
            .then(
                (result) => {
                    // Store result
                    this.setState({
                        isLoaded: true,
                        games: result
                    });
                },
                (error) => {
                    // Store error
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
            // An error occurred
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            // Is loading data
            return <p>Lade...</p>;
        } else if (games.length == 0) {
            // There is currently no lobby
            return <p>Keine Lobby verfügbar</p>;
        } else {
            // Show all available lobbys
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

// A button to join a specific lobby
function JoinLobbyButton({gameID}) {
    // On click, join lobby with the given gameID
    let navigate = useNavigate();
    return (
        <button className="joinLobbyButton" onClick={ () => navigate("../gamelobby/" + gameID)}>Lobby beitreten</button>
    );
}
