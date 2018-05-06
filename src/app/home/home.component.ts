import { Component, OnInit } from '@angular/core';
import { HomeHttpService } from "../home-http.service";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    allHouses: any;
    allCharacters: any;
    allBooks: any;

    constructor(private homeHttpService: HomeHttpService) {

    }

    ngOnInit() {
        console.log("Home View Component called");
        this.homeHttpService.getAllBooks().subscribe(
            data => {
                console.log("Books Response" + JSON.stringify(data));
                this.getBooksSortedData(data);
                this.allBooks = data;
            },
            error => {
                console.log("some error occured");
                console.log(error.errorMessage);
            }
        )

        this.homeHttpService.getAllCharacters().subscribe(
            data => {
                console.log("Characters Response" + JSON.stringify(data));
                this.allCharacters = data;
            },
            error => {
                console.log("some error occured");
                console.log(error.errorMessage);
            }
        )

        this.homeHttpService.getAllHouses().subscribe(
            data => {
                console.log("House Response" + JSON.stringify(data));
                this.allHouses = data;
            },
            error => {
                console.log("some error occured");
                console.log(error.errorMessage);
            }
        )








    }
    getBooksSortedData = (data) => {
        data.sort((a,b)=> {
            return a.name>b.name;
        });
        return data;

    }

}
