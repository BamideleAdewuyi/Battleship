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

    setShipPosition(ship, length, direction, x, y) {
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
    };

    placeShip(shipType, length, direction, x, y) {
        const ship = this.createShip(shipType, length);
        ship.position = [];

        this.setShipPosition(ship, length, direction, x, y);

        this.board.push(ship)
    };

    getRandomDir() {
        const dir = ["vertical", "horizontal"];
        return dir[Math.floor(Math.random() * 2)];
    };

    placeShipRandom(shipType, length) {
        let ship = this.createShip(shipType, length);
        const direction = this.getRandomDir();
        const validPos = this.getValidPositions(ship, direction);
        const randomPos = validPos[Math.floor(Math.random() * validPos.length)]
        this.placeShip(shipType, length, direction, randomPos[0], randomPos[1])
    };

    generateGrid() {
        let grid = [];
        for (let x = 1; x < 11; x++) {
            for (let y = 1; y < 11; y++) {
                grid.push([x, y]);
            }
        }
        return grid;
    };

    getValidPositions(ship, direction) {
        const grid = this.generateGrid();
        let validPos = [];
        for (const square of grid) {
            this.setShipPosition(ship, ship.length, direction, square[0], square[1]);
            for (const pos of ship.position) {
                console.log(pos)
                if (this.checkSquareValid(pos[0], pos[1]) && this.checkShipInBounds(ship)) {
                    validPos.push(square);
                }
            };
        };
        return validPos;
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