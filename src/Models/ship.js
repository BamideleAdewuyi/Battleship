class Ship {
    constructor(length, damage = 0, shipType) {
        this.length = length;
        this.damage = damage;
        this.shipType = shipType;
    }

    hit() {
        this.damage += 1;
    };

    isSunk() {
        if (this.damage >= this.length) return true;
        else return false;
    };
}

export default Ship;