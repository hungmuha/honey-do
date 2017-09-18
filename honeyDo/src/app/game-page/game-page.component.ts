import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main/main.service'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  navExpanded = false;
  oneGame;
  newTask= <any>{};
  addedTask;
  // scoredUser = <any>{};

  dismissNav(){
    this.navExpanded = false;
  }

  toggleNav(){
    if(!this.navExpanded) 
      {this.navExpanded = true;}
    else {this.navExpanded = false;}
  }

  constructor( 
  	private route:ActivatedRoute,
  	private mainService: MainService
  ) { }

  ngOnInit() {
  	this.route.params.forEach(param=>{
  		this.mainService.getGame(param.id)
  		.subscribe(response =>{
  			this.oneGame = response.json();
  			console.log(this.oneGame);
  		})
  	})
  }

  addNewTask(newTask){
    console.log("creating new task");
    newTask.gameId = this.oneGame.id;
    newTask.point = 1;
    this.mainService.addTask(newTask)
        .subscribe(response =>{
      this.addedTask = response.json();
      console.log(this.addedTask);
      window.location.href = "/GamePage/"+ newTask.gameId;
    })
  }

  deleteTask(deletedTask) {
    console.log(deletedTask);
    this.mainService.deleteTask(deletedTask)
    .subscribe(response=> {
      let taskIndex = this.oneGame.tasks.indexOf(deletedTask);
      this.oneGame.tasks.splice(taskIndex,1);
      window.location.href = "/GamePage/" + deletedTask.gameId;
    });
  }

  addScore(scoredUser,doneTask){
    // scoredUser.userName = user.userName;
    scoredUser.score = scoredUser.score+1;
    // scoredUser.image = user.image;
    // scoredUser.gameId = user.id;
    this.mainService.updateUser1(scoredUser)
        .subscribe(response =>{
          console.log(response.json());
        })
    this.mainService.deleteTask(doneTask)
        .subscribe(response=>{
          window.location.href = "/GamePage/" + doneTask.gameId;
        });
  }
  

}
