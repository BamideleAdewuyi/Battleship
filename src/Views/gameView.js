class GameView {
    constructor() {
        this.container = document.querySelector(".container");

        this.headingDiv = document.createElement("div");
        this.heading = document.createElement("h2");
        this.heading.textContent = "Battleship";
        this.headingDiv.append(this.heading);

        this.container.append(this.headingDiv);
    };
};

export default GameView;