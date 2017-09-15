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
  nameGame;
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
  createGame(nameGame) {
    console.log('saving a new game');
    this.mainService.createNewGame(nameGame)
      .subscribe(response => {
        console.log(response.json());
        let newGame = response.json();

        //update the user1 with the new game
        user1Update.id = this.route.params;
        user1Update.userName = this.currentUser.userName;
        user1Update.image = this.currentUser.image;
        user1Update.gameId = newGame.id;
 
          this.mainService.updateUser1(user1Update)
          .subscribe(response =>{
              console.log(response.json());
          });
          
        user2Update.id = this.partnerInfo.id;
        user2Update.userName = this.partnerInfo.userName;
        user2Update.image = this.partnerInfo.image;
        user2Update.gameId = newGame.id;

          this.mainService.updateUser2(user2Update)
          .subscribe(response =>{
              console.log(response.json());
          });
      });
        
  }


}
