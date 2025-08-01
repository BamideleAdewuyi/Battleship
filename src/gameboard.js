import Ship from "./ship";
class Gameboard {
    constructor() {
        this.board = [];
    };

    createShip(length) {
        return new Ship(length);
    };

    placeShip(length, direction, x, y) {
        const ship = this.createShip(length);
        for (let i = x; i < length; i++) {
            this.board.push([i, y])
        }
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