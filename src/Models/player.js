import Gameboard from "./gameboard";

class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new Gameboard();
        if (type == "Computer") {
            this.squares = []
            this.initialise();
        }
    }
    initialise() {
        for (let x = 0; x < 11; x++) {
            for (let y = 0; y < 11; y++) {
                this.squares.push([x, y])
            }
        }
    };

    removeItem(arr, item) {
        for (const pair of arr) {
            if (pair[0] == item[0] && pair[1] == item [1]) {
                const index = arr.indexOf(pair);
                if (index > -1) {
                    arr.splice(index, 1);
                }
                return arr;
            }
        }
    };

    makeRandomAttack(gameboard) {
        const attack = this.squares[Math.floor(Math.random() * this.squares.length)];
        gameboard.receiveAttack(attack[0], attack[1]);
        this.squares = this.removeItem(this.squares, attack);
    }
};

export default Player;