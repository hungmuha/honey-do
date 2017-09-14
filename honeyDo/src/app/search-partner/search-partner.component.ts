import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-search-partner',
  templateUrl: './search-partner.component.html',
  styleUrls: ['./search-partner.component.css']
})
export class SearchPartnerComponent implements OnInit {
	
	partnerInfo;
	partnerName;

  constructor(
  	private mainService: MainService
  ) { }

	findPartner(partnerName){
	  	this.mainService.searchForPartner(partnerName)
		.subscribe(response=>{
			this.partnerInfo = response.json();
			console.log(this.partnerInfo);
		});
	}
	ngOnInit() {}

}
