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

        // Game state container
        this.gameStateContainer = this.createElement("div", "gameStateContainer");
        this.gameStateHeading = this.createElement("h2", "gameStateHeading");
        this.shipStatsContainer = this.createElement("div", "shipStatsContainer");
        this.player1StatsContainer = this.createElement("div", "playerStatsContainer");
        this.player1StatsContainer.setAttribute("id", "player1StatsContainer")
        this.player2StatsContainer = this.createElement("div", "playerStatsContainer");
        this.player2StatsContainer.setAttribute("id", "player2StatsContainer")
        this.shipStatsContainer.append(this.player1StatsContainer, this.player2StatsContainer);
        this.gameStateContainer.append(this.gameStateHeading, this.shipStatsContainer);
        this.gameStateHeading.textContent = `Click "New Game" to start`;

        this.container.append(this.headingContainer, this.gameContainer, this.labelContainer, this.newGameContainer, this.gameStateContainer);
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

    renderBoardAndStats(boardContainer, gameboard, type, player) {
        this.clearContainer(boardContainer);
        this.renderSquares(boardContainer, player);
        if (type == "Human") this.markShips(gameboard, player);
        this.markHits(gameboard, player);
        this.markMisses(gameboard, player);
        
        const statsContainer = document.getElementById(`player${player}StatsContainer`)
        this.renderStatsContainer(statsContainer, gameboard, player);
    };

    renderSquares(boardContainer, player) {
        for (let y = 10; y > 0; y--) {
            let row = this.createElement("div", "row");
            for (let x = 0; x < 10; x++) {
                let square = this.createElement("div", "square");
                square.classList.add(`player${player}x${x+1}`);
                square.classList.add(`player${player}y${y}`);
                square.classList.add(`player${player}Square`)
                square.classList.add(`freeSquare`);
                row.append(square);
            }
            boardContainer.append(row);
        };
    };

    renderStatsContainer(statsContainer, gameBoard, player) {
        for (const ship of gameBoard.board) {
            let shipStatRow = this.createElement("div", "shipStatRow");
            for (let i = 0; i < ship.length; i++) {
                let shipStat = this.createElement("div", "shipStat");
                shipStatRow.append(shipStat);
            }
            statsContainer.append(shipStatRow)
        }
    };

    markShips(gameboard, player) {
        for (const ship of gameboard.board) {
            for (const position of ship.position) {
                let shipSquare = this.getElement(`.player${player}x${position[0]}.player${player}y${position[1]}`);
                shipSquare.classList.remove("freeSquare");
                shipSquare.classList.add("shipSquare");
                shipSquare.classList.add(`player${player}${ship.shipType}`);
            }
        }

    };

    markHits(gameboard, player) {
        for (const hit of gameboard.hits) {
            let hitSquare = this.getElement(`.player${player}x${hit[0]}.player${player}y${hit[1]}`);
            hitSquare.classList.remove("shipSquare");
            hitSquare.classList.add("hitSquare");
        }
    };

    markMisses(gameboard, player) {
        for (const miss of gameboard.misses) {
            let missSquare = this.getElement(`.player${player}x${miss[0]}.player${player}y${miss[1]}`);
            missSquare.classList.remove("shipSquare");
            missSquare.classList.add("missSquare");
        }
    };

    clearContainer(container) {
        container.innerHTML = "";
    };

    bindNewGameButton(handler) {
        this.newGameButton.addEventListener("click", () => {
            handler();
        });
    };

    bindSquares(handler) {
        const squares = document.querySelectorAll('.player2Square');
        squares.forEach(square => {
            square.addEventListener("click", () => {
                handler(square)
            })
        })
    };
};

export default GameView;