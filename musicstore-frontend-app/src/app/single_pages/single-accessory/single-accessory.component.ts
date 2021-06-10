import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessoriesService } from 'src/app/products/accessories/accessories.service';

@Component({
  selector: 'app-single-accessory',
  templateUrl: './single-accessory.component.html',
  styleUrls: ['./single-accessory.component.css']
})
export class SingleAccessoryComponent implements OnInit {

  id: string = "";
  data: any;

  constructor(private route:ActivatedRoute, private accessory_s:AccessoriesService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findAccessoriesById(this.id);
  }

  public findAccessoriesById(id: string): any {
    return this.accessory_s.findAccessoriesById(id).subscribe(value => { this.data = value; });
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
