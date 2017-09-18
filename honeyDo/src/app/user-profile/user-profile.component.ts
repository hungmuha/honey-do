import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	currentUser;
  game = <any>{};
  newGame;
  partnerInfo;
  partnerName;
  user1Update = <any>{};
  user2Update = <any>{};

  constructor(
  	private route: ActivatedRoute,
  	private mainService: MainService
  ) { }

  ngOnInit() {
  	this.route.params.forEach(param => {
  		this.mainService.getUserProfile(param.id)
  		.subscribe(response=>{
  			this.currentUser = response.json();
  			console.log(this.currentUser);
  		});
  	});
  }

  //find the second player when user search the bar
  findPartner(partnerName){
    this.mainService.searchForPartner(partnerName)
    .subscribe(response=>{
      this.partnerInfo = response.json();
      console.log(this.partnerInfo);
    });
  }

  //create the game when user click button
  createGame(game) {
    console.log('saving a new game');
    this.mainService.createNewGame(game)
      .subscribe(response => {
        console.log(response.json());
        this.newGame = response.json();
      });

    this.user1Update.id = this.currentUser.id;
    this.user1Update.userName = this.currentUser.userName;
    this.user1Update.image = this.currentUser.image;
    this.user1Update.gameId = this.newGame.id;

      this.mainService.updateUser1 (this.user1Update)
      .subscribe(response =>{
          console.log(response.json());
      });
      
    this.user2Update.id = this.partnerInfo.id;
    this.user2Update.userName = this.partnerInfo.userName;
    this.user2Update.image = this.partnerInfo.image;
    this.user2Update.gameId = this.newGame.id;

      this.mainService.updateUser2(this.user2Update)
      .subscribe(response =>{
          console.log(response.json());
      });
    window.location.href = "/GamePage/" + this.newGame.id;
  }



}
