class GameController {
    constructor(view, player1, player2) {
        this.view = view;
        this.player1 = player1;
        this.player2 = player2;

        this.view.bindNewGameButton(this.handleNewGameButton)
    };

    handleNewGameButton = () => {
        this.player1.gameboard.initialise();
        this.player2.gameboard.initialise();
        this.player2.initialise();
        this.view.renderGameStateHeading("It's your turn");

        
        this.player1.gameboard.placeShip("Carrier", 5, "horizontal", 1, 10);
        this.player1.gameboard.placeShip("BattleShip", 4, "horizontal", 7, 10);
        this.player1.gameboard.placeShip("Cruiser", 3, "horizontal", 6, 8);
        this.player1.gameboard.placeShip("Submarine", 3, "vertical", 10, 3);
        this.player1.gameboard.placeShip("Destroyer", 2, "vertical", 6, 4);
        
        this.player2.gameboard.placeShipRandom("Carrier", 5);
        this.player2.gameboard.placeShipRandom("BattleShip", 4);
        this.player2.gameboard.placeShipRandom("Cruiser", 3);
        this.player2.gameboard.placeShipRandom("Submarine", 3);
        this.player2.gameboard.placeShipRandom("Destroyer", 2);

        this.view.renderBoardAndStats(this.view.player1Container, this.player1.gameboard, "Human", "1");
        this.view.renderBoardAndStats(this.view.player2Container, this.player2.gameboard, "Computer", "2");
        this.view.bindSquares(this.handleSquares);
        this.view.bindShipSquares(this.handleShipSquaresDown, this.handleShipSquaresUp);
    };

    handleSquares = (square) => {
        const x = Number(square.classList[1].slice(8));
        const y = Number(square.classList[2].slice(8));
        this.player2.gameboard.receiveAttack(x, y);
        this.view.renderBoardAndStats(this.view.player2Container, this.player2.gameboard, "Computer", "2");
        this.view.renderGameStateHeading("Opponent's turn")
        if (this.player2.gameboard.gameOver) {
            this.view.renderGameStateHeading("You won!");
            return;
        }
        setTimeout(() => {
            
            this.player2.makeRandomAttack(this.player1.gameboard);
            this.view.renderBoardAndStats(this.view.player1Container, this.player1.gameboard, "Human", "1");
            this.view.renderGameStateHeading("It's your turn");
            if (this.player1.gameboard.gameOver) {
                this.view.renderGameStateHeading("You lost!");
                return
            }
            this.view.bindSquares(this.handleSquares)
        }, 1000);
    };

    handleShipSquaresDown = (square) => {
        const shipType = square.classList[5].slice(7);
        const ship = this.player1.gameboard.getShip(shipType, this.player1.gameboard);
        square.classList.add("movingShip");
    };

    handleShipSquaresUp = (square) => {
        square.classList.remove("movingShip");
    };
};

export default GameController;