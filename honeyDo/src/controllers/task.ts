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



const taskController = <any>{};
	taskController.create = create;

export {taskController};
