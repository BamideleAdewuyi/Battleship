class GameView {
    constructor() {
        this.container = document.querySelector(".container");

        this.headingDiv = document.createElement("div");
        this.heading = document.createElement("h2");
        this.heading.textContent = "Battleship";
        this.headingDiv.append(this.heading);

        this.gameArea = document.createElement("div");
        this.player1Side = document.createElement("div");
        this.player2Side = document.createElement("div");
        this.gameArea.append(this.player1Side, this.player2Side);

        this.container.append(this.headingDiv, this.gameArea);
    };
};

export default GameView;