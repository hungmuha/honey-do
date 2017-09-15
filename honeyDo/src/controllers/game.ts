import { db } from '../models';
var Game = db.models.Game;
	function create(req,res) {
		console.log("this is the create game controller: " +req.body);
		Game.create(req.body).then(function(game){
			if(!game) res.send(res, "not saved");
			else res.json(game);
		})
	}
const gameController = <any>{};
	gameController.create = create;
export {gameController};