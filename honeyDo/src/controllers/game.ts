import { db } from '../models';
var Game = db.models.Game;
var User = db.models.User;
var Task = db.models.Task;

	function create(req,res) {
		console.log("this is the create game controller: " +req.body);
		Game.create(req.body).then(function(game){
			if(!game) res.send(res, "not saved");
			else res.json(game);
		})
		.catch(function(err) {
    	// print the error details
   		 console.log(err);
		});
	}

	function show(req,res) {
		console.log("this is the get route to get all information of the game");
		Game.findById(req.params.id,{include: User, Task})
		.then(function(game){
			if(!game) res.send(res,"notfound");
			else res.json(game);
		})
	}
const gameController = <any>{};
	gameController.create = create;
	gameController.show = show;
export {gameController};