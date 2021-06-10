import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicSoftwaresService } from 'src/app/products/music-softwares/music-softwares.service';

@Component({
  selector: 'app-single-software',
  templateUrl: './single-software.component.html',
  styleUrls: ['./single-software.component.css']
})
export class SingleSoftwareComponent implements OnInit {

  id: string = "";
  data: any;

  constructor(private route:ActivatedRoute, private software_s:MusicSoftwaresService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findMusicSoftwaresById(this.id);
  }

  public findMusicSoftwaresById(id: string): any {
    return this.software_s.findMusicSoftwaresById(id).subscribe(value => { this.data = value; });
  }

  addToCart(data: any){
    if (localStorage.getItem("logedin") == "true"){
      var cartnumber: number = +localStorage.getItem("cartNumber");
      localStorage.setItem("product" + cartnumber++,  JSON.stringify(data));
      localStorage.setItem("cartNumber", ""+cartnumber);

      this._snackBar.open("Successfuly added to cart!","",{duration: 3000});
    }else{
      this.router.navigate(['/login'])
    }
  }

}
