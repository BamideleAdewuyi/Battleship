import Gameboard from "./gameboard";

let gameboard;

beforeEach(() => {
    gameboard = new Gameboard();
});

test('Can place a ship of length 2, horizontally  at 1,1', () => {
    gameboard.placeShip(2, "horizontal", 1, 1);
    expect(gameboard.board[0].position).toStrictEqual([[1,1], [2,1]])
});

test('Can place a ship of length 2, horizontally  at 1,2', () => {
    gameboard.placeShip(2, "horizontal", 1, 2);
    expect(gameboard.board[0].position).toStrictEqual([[1,2], [2,2]])
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
    gameboard.placeShip(2, "horizontal", 1, 1)
    expect(gameboard.board.length).toBe(2);
});

test('Ship is not added if it goes out of right side of grid', () => {
    gameboard.placeShip(6, "horizontal", 10, 10);
    expect(gameboard.board.length).toBe(0)
});

test('Ship of length 2 can be placed vertically on square (4, 4)', () => {
    gameboard.placeShip(2, "vertical", 4, 4);
    expect(gameboard.board[0].position).toStrictEqual([[4,4], [4,5]])
});

test('Can add 10 ships to valid positions', () => {
    gameboard.placeShip(1, "vertical", 1, 10);
    gameboard.placeShip(1, "vertical", 1, 4);
    gameboard.placeShip(1, "vertical", 1, 1);
    gameboard.placeShip(1, "vertical", 7, 7);
    gameboard.placeShip(2, "horizontal", 3, 3);
    gameboard.placeShip(2, "horizontal", 5, 9);
    gameboard.placeShip(2, "horizontal", 8, 10);
    gameboard.placeShip(3, "vertical", 2, 6);
    gameboard.placeShip(3, "vertical", 9, 6);
    gameboard.placeShip(4, "horizontal", 6, 4);
    expect(gameboard.board.length).toBe(10)
});

test('checkForSquare returns true with simple inputs', () => {
    expect(gameboard.checkForSquare(3, 4, [[3, 4]])).toBe(true)
});

test('checkForSquare returns false with simple inputs', () => {
    expect(gameboard.checkForSquare(3, 5, [[3, 4]])).toBe(false)
});

test('checkForSquare returns true when searching through longer array', () => {
    expect(gameboard.checkForSquare(3, 4, [[3434, 6], [3, 4], [4, 5]])).toBe(true)
});