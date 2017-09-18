import { db } from '../models';
var Task = db.models.Task;

	function create(req,res){
		console.log("this is the task create controller");
		Task.create(req.body).then(function(task){
			if(!task) res.send(res, "not saved");
			else res.json(task);
		})
		.catch(function(err){
			console.log(err);
		})
	}
	function destroy(req,res){
		console.log("this is the delete task controller");
		Task.findById(req.params.id)
		.then(function(task){
			if(!task) res.send(res,"not found");
			else{
				res.send(task);
				console.log( "this is the information on the deleted task" + task);
				return task.destroy();
			}
		})
		// .then(function(){
		// 	res.redirect(303,"/GamePage/1");
		// })
	}


const taskController = <any>{};
	taskController.create = create;
	taskController.destroy = destroy;

export {taskController};
