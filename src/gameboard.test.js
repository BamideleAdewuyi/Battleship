import Gameboard from "./gameboard";

let gameboard;

beforeEach(() => {
    gameboard = new Gameboard();
})

test('Can place a ship of length 2, horizontally  at 0,0', () => {
    gameboard.placeShip(2, "horizontal", 0, 0);
    expect(gameboard.board[0].position).toStrictEqual([[0,0], [1,0]])
})

test('Can place a ship of length 2, horizontally  at 0,1', () => {
    expect(gameboard.board[0].position).toStrictEqual([[0,1], [1,1]])
})