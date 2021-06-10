import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditionalEquipmentService } from 'src/app/products/additional-equipment/additional-equipment.service';

@Component({
  selector: 'app-single-equipment',
  templateUrl: './single-equipment.component.html',
  styleUrls: ['./single-equipment.component.css']
})
export class SingleEquipmentComponent implements OnInit {

  id: string = "";
  data: any;

  constructor(private route:ActivatedRoute, private a_equipment_s:AdditionalEquipmentService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findAdditionalEquipmentById(this.id);
  }

  public findAdditionalEquipmentById(id: string): any {
    return this.a_equipment_s.findAdditionalEquipmentById(id).subscribe(value => { this.data = value; });
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
