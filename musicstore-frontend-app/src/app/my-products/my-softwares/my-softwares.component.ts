import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicSoftwaresService } from 'src/app/products/music-softwares/music-softwares.service';


@Component({
  selector: 'app-my-softwares',
  templateUrl: './my-softwares.component.html',
  styleUrls: ['./my-softwares.component.css']
})
export class MySoftwaresComponent implements OnInit {

  constructor(private software_s: MusicSoftwaresService, private _snackBar: MatSnackBar) { }

  data: any;

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"))
  }

  public findAllBySeller_username(sUsername: string): any {
    this.software_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteSoftware(id: string){
    this.software_s.delete(id).subscribe();
    
    this._snackBar.open("Software is deleted!","",{duration: 3000});
  }

  updateSoftware(id: String): any {
    this.software_s.updateSoftware(id);
  }

}
