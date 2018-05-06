import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HomeHttpService } from "../home-http.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
    singleHouseData: Object;

  constructor(private _route:ActivatedRoute,private homeHttpService:HomeHttpService,private location:Location) { 
                console.log("House View Component called");

  }

  ngOnInit() {
      let houseIdUrl = this._route.snapshot.paramMap.get('houseIdUrl');
        this.homeHttpService.getSingleHouse(houseIdUrl).subscribe(
              data => {
              console.log("Single House Response"+JSON.stringify(data));
              this.singleHouseData = data;
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
