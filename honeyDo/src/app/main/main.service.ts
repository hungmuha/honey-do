import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
baseUrl ='http://localhost:3000';

  constructor(private http:Http) { }	

  getUserProfile(userId){
  	console.log(userId);
  	return this.http.get(`${this.baseUrl}/user/${userId}`);
  }

  searchForPartner(name){
  	console.log("this is the parnert name " + name);
  	return this.http.get(`${this.baseUrl}/user2/${name}`)
  }

  createNewGame(nameGame){
  	console.log("this is the create new game route");
  	return this.http.post(`${this.baseUrl}/game`, nameGame)

  }
	
  

}
