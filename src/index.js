import GameController from "./Controllers/gameController";
import GameView from "./Views/gameView";
import Player from "./Models/player";
import "./style.css";

const game = new GameController(new GameView, new Player, new Player);