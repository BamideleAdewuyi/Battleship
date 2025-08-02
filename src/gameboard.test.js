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

test('checkSquareValid method returns false with square next to placed ship', () => {
    gameboard.placeShip(2, 'horizontal', 4, 4);
    expect(gameboard.checkSquareValid(4, 4)).toBe(false);
    expect(gameboard.checkSquareValid(4, 3)).toBe(false);
    expect(gameboard.checkSquareValid(3, 3)).toBe(false);
    expect(gameboard.checkSquareValid(3, 4)).toBe(false);
    expect(gameboard.checkSquareValid(3, 5)).toBe(false);
    expect(gameboard.checkSquareValid(4, 5)).toBe(false);
    expect(gameboard.checkSquareValid(5, 5)).toBe(false);
    expect(gameboard.checkSquareValid(5, 4)).toBe(false);
    expect(gameboard.checkSquareValid(5, 3)).toBe(false);

    expect(gameboard.checkSquareValid(5, 4)).toBe(false);
    expect(gameboard.checkSquareValid(6, 4)).toBe(false);
    expect(gameboard.checkSquareValid(6, 3)).toBe(false);
    expect(gameboard.checkSquareValid(5, 3)).toBe(false);
    expect(gameboard.checkSquareValid(4, 3)).toBe(false);
    expect(gameboard.checkSquareValid(4, 4)).toBe(false);
    expect(gameboard.checkSquareValid(4, 5)).toBe(false);
    expect(gameboard.checkSquareValid(5, 5)).toBe(false);
    expect(gameboard.checkSquareValid(6, 5)).toBe(false);
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

test('checkInBounds will return false when a ship located off the grid is passed into it', () => {
    gameboard.placeShip(5, "horizontal", 10, 10);
    expect(gameboard.checkShipInBounds(gameboard.board[0])).toBe(false);
})