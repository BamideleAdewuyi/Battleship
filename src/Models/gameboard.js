import Ship from "./ship";
class Gameboard {
    constructor() {
        this.initialise();
    };

    initialise() {
        this.board = [];
        this.misses = [];
        this.hits = [];
        this.sunkShips = [];
        this.gameOver = false;
    };

    createShip(shipType, length) {
        return new Ship(shipType, length);
    };

    placeShip(shipType, length, direction, x, y) {
        const ship = this.createShip(shipType, length);
        let valid = true;
        ship.position = [];

        if (direction == "horizontal") {
            for (let i = x; i < x + length; i++) {
                ship.position.push([i, y])
            };
        }

        if (direction == "vertical") {
            for (let i = y; i < y + length; i++) {
                ship.position.push([x, i])
            };
        }

        for (const square of ship.position) {
            if (!this.checkSquareValid(square[0], square[1])) {
                valid = false
            }
        };
        if (!this.checkShipInBounds(ship)) valid = false;

        if (valid) {
            this.board.push(ship)
        }
    };

    placeShipRandom() {

    };

    checkSquareValid(x, y) {
        for (const ship of this.board) {
            for (const square of ship.position) {
                if (Math.abs(square[0] - x) < 2 && Math.abs(square[1] - y) < 2) {
                    return false;
                }
            }
        }
        return true;
    };

    checkShipInBounds(ship) {
        for (const square of ship.position) {
            if (square[0] > 10 || square[1] > 10 || square[0] < 1 || square[1] < 1) return false;
        }
        return true;
    };

    receiveAttack(x, y) {
        let alreadyHit = false;
        if (this.checkForSquare(x, y, this.hits) || this.checkForSquare(x, y, this.misses)) alreadyHit = true;

        if (!alreadyHit) {
            for (let ship of this.board) {
                if (this.checkForSquare(x, y, ship.position)) {
                    ship.hit();
                    this.hits.push([x, y]);
                    this.checkShipSunk(ship);
                    if (this.checkAllShipsSunk()) this.gameOver = true;
                    return;
                }
            }
            this.misses.push([x, y]);
        }

    };

    recordMiss(x, y) {
        this.misses.push([x, y]);
    };

    recordHit(x, y) {
        this.hits.push([x, y]);
    };

    checkForSquare(x, y, arr) {
        for (const square of arr) {
            if (square[0] == x && square[1] == y) return true;
        };
        return false;
    };

    checkShipSunk(ship) {
        if (ship.isSunk()) this.sunkShips.push(ship);
    };

    checkAllShipsSunk() {
        for (const ship of this.board) {
            if (!ship.isSunk()) {
                return false;
            }
        }
        return true;
    };
};

export default Gameboard;