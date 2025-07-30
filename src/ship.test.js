import Ship from "./ship";

let ship;

beforeEach(() => {
    ship = new Ship(5)
});

test('Ship class can register when its been hit', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
});