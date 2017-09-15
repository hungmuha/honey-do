import { db } from '../models';
var Game = db.models.Game;
	function create(req,res) {
		Game.create(req.body).then(function(game){
			if(!game) res.send(res, "not saved");
			else res.json(game);
		})
	}
const gameController = <any>{};
	gameController.create = create;
export {gameController};