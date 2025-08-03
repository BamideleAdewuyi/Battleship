class GameView {
    constructor() {
        this.container = document.querySelector(".container");

        this.headingDiv = document.createElement("div");
        this.headingDiv.classList.add("headingDiv");
        this.heading = document.createElement("h2");
        this.heading.classList.add("heading")
        this.heading.textContent = "Battleship";
        this.headingDiv.append(this.heading);

        this.gameArea = document.createElement("div");
        this.gameArea.classList.add("gameArea");
        this.player1Side = document.createElement("div");
        this.player1Side.classList.add("playerSide");
        this.player1Side.setAttribute("id", "player1");
        this.player2Side = document.createElement("div");
        this.player2Side.classList.add("playerSide");
        this.player2Side.setAttribute("id", "player2");
        this.gameArea.append(this.player1Side, this.player2Side);

        this.container.append(this.headingDiv, this.gameArea);
    };
};

export default GameView;