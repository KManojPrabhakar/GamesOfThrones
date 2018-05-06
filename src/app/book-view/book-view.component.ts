import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HomeHttpService } from "../home-http.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
    singleBookData: Object;

  constructor(private _route:ActivatedRoute,private homeHttpService:HomeHttpService,private location:Location) {
      console.log("Book View Component called");

   }

  ngOnInit() {
      debugger;
         let bookIdUrl = this._route.snapshot.paramMap.get('bookIdUrl');
        this.homeHttpService.getSingleBook(bookIdUrl).subscribe(
          data => {
              console.log("Single House Response"+JSON.stringify(data));
              this.singleBookData = data;
          },
          error => {
              console.log("some error occured");
              console.log(error.errorMessage);
          }
      )
    }

    goBackToPreviousPage = () =>  {

            this.location.back();

        }

}
