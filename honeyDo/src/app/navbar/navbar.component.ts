import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	currentUser= <any>{};
  constructor(
  	private route: ActivatedRoute,
  	private mainService: MainService
  ) { }

  ngOnInit() {
  	    //this call to service to get all the information of the user as the page pull up
  	// this.route.params.forEach(param => {
  	// 	this.mainService.getUserProfile(param.id)
  	// 	.subscribe(response=>{
  	// 		this.currentUser = response.json();
  	// 		console.log(this.currentUser);
  	// 	});
  	// });
  }

}
