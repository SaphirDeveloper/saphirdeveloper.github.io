import React from "react";
import './HelpPage.css';

function HelpPage() {
    return (
        <div className="HelpPage">
        <h1>Hilfe</h1>
        <h3>Wie melde ich mich an?</h3>
        <p>Falls Sie sich noch nicht registriert haben, können Sie dies oben rechts im Menüpunkt "Neues Konto erstellen tun". Geben Sie hierfür einen
            Namen in das Textfeld ein. Zum Anmelden klicken Sie oben rechts auf den Menüpunkt "Einloggen". Melden Sie sich mit ihrem Benutzernamen an.
        </p>
        <h3> Wie kann ich ein Spiel starten?</h3>
        <p>Das Spiel "Type-Speed-Duel" befindet sich im Hauptmenü. Klicken Sie hierfür auf die Schaltfläche "Mehrspielermodus". Hier können
            Sie einen Raum erstellen oder einem bereits existierenden Raum beitreten. Oben im Menüpunkt "Rangliste" können Sie die Punktzahl aller Spieler einsehen.
        </p>
        <h4>
            Type-Speed-Duel entstand aus einem Projekt der HS-Anhalt unter Aufsicht von Toni Barth.
        </h4>
        </div>
    );
}

export default HelpPage;