import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class HomeHttpService {
	public baseUrl = 'https://www.anapioficeandfire.com/api';
	constructor(private _http: HttpClient) {

		console.log("Home Http Service Called");
	}

	getAllBooks = () => {
			let response = this._http.get(this.baseUrl+'/books');
			return response;
	} 

	getAllCharacters = () => {
		let response = this._http.get(this.baseUrl+'/characters');
		return response;
	}

	getAllHouses = () => {
		let response = this._http.get(this.baseUrl+'/houses');
		return response;
	}


	getSingleBook = (bookIdUrl) => {
		debugger;
			let response = this._http.get(bookIdUrl);
			return response;
	} 

	getSingleCharacter = (characterIdUrl) => {
			let response = this._http.get(characterIdUrl);
			return response;
	} 

	getSingleHouse = (houseIdUrl) => {
			let response = this._http.get(houseIdUrl);
			return response;
	} 




}
