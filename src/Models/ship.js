class Ship {
    constructor(shipType, length, damage = 0) {
        this.shipType = shipType;
        this.length = length;
        this.damage = damage;
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