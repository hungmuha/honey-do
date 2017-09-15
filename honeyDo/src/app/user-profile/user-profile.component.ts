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

  findPartner(partnerName){
    this.mainService.searchForPartner(partnerName)
    .subscribe(response=>{
      this.partnerInfo = response.json();
      console.log(this.partnerInfo);
    });
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
