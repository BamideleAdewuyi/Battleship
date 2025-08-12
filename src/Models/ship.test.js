import Ship from "./ship";

let ship;

beforeEach(() => {
    ship = new Ship("Destroyer", 5);
});

test('Ship class can register when its been hit', () => {
    ship.hit();
    expect(ship.damage).toBe(1);
});

test('Ship is sunk after five hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('Ship is not sunk after 4 hits', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})