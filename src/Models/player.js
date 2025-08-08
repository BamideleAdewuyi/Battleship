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
        const index = arr.indexOf(item);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };
};

export default Player;