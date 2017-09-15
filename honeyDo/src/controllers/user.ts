import { db } from '../models';
var User = db.models.User;

function show(req,res){
	User.findById(req.params.id)
	.then(function(user){
		if(!user) res.send(res,"not found");
		else res.json(user);
	})
}

function showPartner(req,res){
	console.log("hit this show Partner route");
	User.findOne({where: {userName:req.params.name}})
	.then(function(user){
		if(!user) res.send(res, "not found");
		else res.json(user);
	})
}

function userUpdate(req,res){
	console.log("hit this user1 update route");
	User.findById(req.params.id)
	.then(function(user){
		if(!user) res.send(res,"not found");
		else return user.updateAttributes(req.body);
	})
	.then(function(user){
		res.json(user);
	});
}


const userController = <any>{};
	userController.show = show;
	userController.showPartner = showPartner;
	userController.user1Update = userUpdate;
export {userController};