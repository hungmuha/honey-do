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

const userController = <any>{};
	userController.show = show;
	userController.showPartner = showPartner;
export {userController};