import Gameboard from "./gameboard";

let gameboard;

beforeEach(() => {
    gameboard = new Gameboard();
});

test('Can place a ship of length 2, horizontally  at 0,0', () => {
    gameboard.placeShip(2, "horizontal", 0, 0);
    expect(gameboard.board[0].position).toStrictEqual([[0,0], [1,0]])
});

test('Can place a ship of length 2, horizontally  at 0,1', () => {
    gameboard.placeShip(2, "horizontal", 0, 1);
    expect(gameboard.board[0].position).toStrictEqual([[0,1], [1,1]])
});

test('checkShipValid method returns false with square next to placed ship', () => {
    gameboard.placeShip(2, 'horizontal', 4, 4);
    expect(gameboard.checkShipValid(4, 4)).toBe(false);
    expect(gameboard.checkShipValid(4, 3)).toBe(false);
    expect(gameboard.checkShipValid(3, 3)).toBe(false);
    expect(gameboard.checkShipValid(3, 4)).toBe(false);
    expect(gameboard.checkShipValid(3, 5)).toBe(false);
    expect(gameboard.checkShipValid(4, 5)).toBe(false);
    expect(gameboard.checkShipValid(5, 5)).toBe(false);
    expect(gameboard.checkShipValid(5, 4)).toBe(false);
    expect(gameboard.checkShipValid(5, 3)).toBe(false);

    expect(gameboard.checkShipValid(5, 4)).toBe(false);
    expect(gameboard.checkShipValid(6, 4)).toBe(false);
    expect(gameboard.checkShipValid(6, 3)).toBe(false);
    expect(gameboard.checkShipValid(5, 3)).toBe(false);
    expect(gameboard.checkShipValid(4, 3)).toBe(false);
    expect(gameboard.checkShipValid(4, 4)).toBe(false);
    expect(gameboard.checkShipValid(4, 5)).toBe(false);
    expect(gameboard.checkShipValid(5, 5)).toBe(false);
    expect(gameboard.checkShipValid(6, 5)).toBe(false);
})

test('Gameboard will not add a ship if any part of it is next to a ship already placed', () => {
    gameboard.placeShip(2, "horizontal", 4, 4);
    gameboard.placeShip(2, "horizontal", 5, 4)
    expect(gameboard.board.length).toBe(1);
});

test('Gameboard can add a ship if it is not too close to an already placed ship', () => {
    gameboard.placeShip(2, "horizontal", 4, 4);
    gameboard.placeShip(2, "horizontal", 0, 0)
    expect(gameboard.board.length).toBe(2);
});

test('Ship is not added if it goes out of right side of grid', () => {
    gameboard.placeShip(6, "horizontal", 10, 10);
    expect(gameboard.board.length).toBe(0)
})