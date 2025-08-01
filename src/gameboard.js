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
        ship.position = [];
        for (let i = x; i < x + length; i++) {
            ship.position.push([i, y])
        }
        this.board.push(ship)
    };

    initialiseBoard() {
        for (let i = 0; i < 10; i++) {
            this.board[i] = [];
            for (let j = 0; j < 10; j++) {
                this.board[i].push(0)
            }
        }
    };

    checkSquareValid(x, y) {
        for (const ship of this.board) {
            for (const square of ship.position) {
                if (Math.abs(square[0] - x) < 2 || Math.abs(square[1] - y) < 2) {
                    return false;
                }
            }
        }
        return true;
    };

    getSquare(location) {

    };
};

export default Gameboard;