import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  nameGame;
  newGame
  constructor(mainService: MainService) { }

  ngOnInit() {
  }
  createGame(nameGame) {
  	console.log('saving a new game');
  	this.mainService.createNewGame(nameGame)
  		.subscribe(response => {
  			console.log(response.json());
  			let.newGame = response.json();
  		})
  }
}
