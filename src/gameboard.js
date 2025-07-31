import Ship from "./ship";
class Gameboard {
    constructor() {
        this.board = [];
        this.initialiseBoard();
    };

    createShip(length) {
        return new Ship(length);
    };

    placeShip(ship, direction, location) {

    };

    initialiseBoard() {
        for (let i = 0; i < 10; i++) {
            this.board[i] = [];
            for (let j = 0; j < 10; j++) {
                this.board[i].push(0)
            }
        }
    };

    getSquare(location) {

    };
};

export default Gameboard;