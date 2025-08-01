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
    expect(gameboard.checkSquareValid(4, 3)).toBe(false)
})

test('Gameboard will not add a ship if any part of it is next to a ship already placed', () => {
    gameboard.placeShip(2, "horizontal", 4, 4);
});