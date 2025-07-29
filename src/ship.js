class Ship {
    constructor(length, sunk = false, hits = 0) {
        this.length = length;
        this.sunk = sunk;
        this.hits = hits;
    }
}

export default Ship;