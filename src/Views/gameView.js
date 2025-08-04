class GameView {
    constructor() {
        this.container = document.querySelector(".container");

        // Heading
        this.headingContainer = this.createElement("div", "headingContainer");
        this.heading = this.createElement("h2", "heading");
        this.heading.textContent = "Battleship";
        this.headingContainer.append(this.heading);

        // Game Area
        this.gameContainer = this.createElement("div", "gameContainer");
        this.player1Container = this.createElement("div", "playerContainer");
        this.player1Container.setAttribute("id", "player1");
        this.player2Container = this.createElement("div", "playerContainer");
        this.player2Container.setAttribute("id", "player2");
        this.gameContainer.append(this.player1Container, this.player2Container);

        // Labels for players
        this.labelContainer = this.createElement("div", "labelContainer");
        this.player1Label = this.createElement("h3", "playerLabel");
        this.player1Label.setAttribute("id", "player1Label");
        this.player1Label.textContent = "Your boats";
        this.player2Label = this.createElement("h3", "playerLabel");
        this.player2Label.setAttribute("id", "player2Label");
        this.player2Label.textContent = "Opponent's boats";
        this.labelContainer.append(this.player1Label, this.player2Label);

        // New game button
        this.newGameContainer = this.createElement("div", "newGameContainer");
        this.newGameButton = this.createElement("button", "newGameButton");
        this.newGameButton.textContent = "New Game";
        this.newGameContainer.append(this.newGameButton);

        this.container.append(this.headingContainer, this.gameContainer, this.labelContainer, this.newGameContainer);

        this.renderBoard(this.player1Container, "")
    };

    getElement(selector) {
        return document.querySelector(selector);
    };

    createElement(tag, className) {
        const element = document.createElement(tag);
        
        if (className) element.classList.add(className);

        return element;
    };

    refreshBoards() {

    };

    renderBoard(container, gameboard) {
        // Make 10x10 grid of squares.
        // Write separate methods to mark square as:
        // - free but not hit
        // - free and hit
        // - taken by an undamaged ship
        // - taken by a damaged ship
        // Also write method for clearing boards
        for (let y = 10; y > 0; y--) {
            let row = this.createElement("div", "row");
            for (let x = 0; x < 10; x++) {
                let square = this.createElement("div", "square");
                square.classList.add(`x${x+1}`);
                square.classList.add(`y${y}`);
                row.append(square);
            }
            container.append(row);
        };
    };
};

export default GameView;