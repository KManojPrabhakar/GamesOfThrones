import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HomeHttpService } from "../home-http.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
    singleCharacterData: Object;

  constructor(private _route:ActivatedRoute,private homeHttpService:HomeHttpService,private location:Location) {
          console.log("Character View Component called");

   }

  ngOnInit() {
        let characterIdUrl = this._route.snapshot.paramMap.get('characterIdUrl');
        this.homeHttpService.getSingleCharacter(characterIdUrl).subscribe(
          data => {
              console.log("Single Character Response"+JSON.stringify(data));
              this.singleCharacterData = data;
          },
          error => {
              console.log("some error occured");
              console.log(error.errorMessage);
          }

      );

        
  }

  goBackToPreviousPage = () =>  {

            this.location.back();

    }

}
