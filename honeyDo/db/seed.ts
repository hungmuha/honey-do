import {db} from '../models';
let DB = db.models;

var userTest=[
	{	
		Id : 1,
		userName: 'Hung',
		score : 10,
		gameId: 1
	},
	{
		Id : 2,
		userName: 'Jessi',
		score : 20,
		gameId: 1
	}
];

var taskTest=[
	{
		Id : 1,
		task : 'clean the kitchen',
		point: 1,
		gameId:1
	},
	{
		Id : 2,
		task : 'cook dinner',
		point: 1,
		gameId: 1
	}
];

var game = function(){
	return DB.Game.create({
			id: 1,
			gameName: 'Hung vs Jessi'
	});
};

var user = function(){
	return DB.User.bulkCreate(userTest);
};
var task = function(){
	return DB.Task.bulkCreate(taskTest);
};


game()
.then(user)
.then(task)
.then(function(){
	process.exit();
});