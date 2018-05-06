import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routing
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHttpService } from "./home-http.service";
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent } from './house-view/house-view.component';


const routes: Routes = [
    {path:'home',component:HomeComponent},
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  {path:'books/:bookIdUrl',component:BookViewComponent},
  {path:'character/:characterIdUrl',component:CharacterViewComponent},
  {path:'house/:houseIdUrl',component:HouseViewComponent},

  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    CharacterViewComponent,
    HouseViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HomeHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
