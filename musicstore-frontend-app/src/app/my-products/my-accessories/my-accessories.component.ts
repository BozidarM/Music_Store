import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccessoriesService } from 'src/app/products/accessories/accessories.service';

@Component({
  selector: 'app-my-accessories',
  templateUrl: './my-accessories.component.html',
  styleUrls: ['./my-accessories.component.css']
})
export class MyAccessoriesComponent implements OnInit {

  constructor(private accessories_s: AccessoriesService, private _snackBar: MatSnackBar) { }

  data: any;

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"))
  }

  public findAllBySeller_username(sUsername: string): any {
    this.accessories_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteAccessory(id: string){
    this.accessories_s.delete(id).subscribe();
    
    this._snackBar.open("Accessory is deleted!","",{duration: 3000});
  }

  updateAccessory(id: String): any {
    this.accessories_s.updateAccessory(id);
  }


}
