import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'musicstore-frontend-app';

  isloged: any;

  ngOnInit(): void {
    this.isloged = localStorage.getItem("logedin");

    if(this.isloged == "true"){
      this.isloged = true;
    }else{
      this.isloged = false;
    }
  }
}
