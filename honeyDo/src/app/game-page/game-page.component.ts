import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main/main.service'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  oneGame;
  newTask;
  addedTask;
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
    })
  }

  

}
