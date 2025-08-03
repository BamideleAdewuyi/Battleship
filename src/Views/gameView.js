class GameView {
    constructor() {
        this.container = document.querySelector(".container");

        // Heading
        this.headingDiv = document.createElement("div");
        this.headingDiv.classList.add("headingDiv");
        this.heading = document.createElement("h2");
        this.heading.classList.add("heading")
        this.heading.textContent = "Battleship";
        this.headingDiv.append(this.heading);

        // Game Area
        this.gameArea = document.createElement("div");
        this.gameArea.classList.add("gameArea");
        this.player1Side = document.createElement("div");
        this.player1Side.classList.add("playerSide");
        this.player1Side.setAttribute("id", "player1");
        this.player2Side = document.createElement("div");
        this.player2Side.classList.add("playerSide");
        this.player2Side.setAttribute("id", "player2");
        this.gameArea.append(this.player1Side, this.player2Side);

        // Labels for players
        this.labelArea = document.createElement("div");
        this.labelArea.classList.add("labelArea");
        this.player1Label = document.createElement("h3");
        this.player1Label.classList.add("playerLabel");
        this.player1Label.setAttribute("id", "player1Label");
        this.player1Label.textContent = "Your boats";
        this.player2Label = document.createElement("h3");
        this.player2Label.classList.add("playerLabel");
        this.player2Label.setAttribute("id", "player2Label");
        this.player2Label.textContent = "Opponent's boats"
        this.labelArea.append(this.player1Label, this.player2Label);

        this.container.append(this.headingDiv, this.gameArea, this.labelArea);
    };
};

export default GameView;