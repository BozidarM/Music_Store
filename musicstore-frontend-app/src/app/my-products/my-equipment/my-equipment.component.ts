import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdditionalEquipmentService } from 'src/app/products/additional-equipment/additional-equipment.service';

@Component({
  selector: 'app-my-equipment',
  templateUrl: './my-equipment.component.html',
  styleUrls: ['./my-equipment.component.css']
})
export class MyEquipmentComponent implements OnInit {

  constructor(private a_equipment_s: AdditionalEquipmentService, private _snackBar: MatSnackBar) { }

  data: any;

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"))
  }

  public findAllBySeller_username(sUsername: string): any {
    this.a_equipment_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteEquipment(id: string){
    this.a_equipment_s.delete(id).subscribe();
    
    this._snackBar.open("Additional equipment is deleted!","",{duration: 3000});
  }

  updateEquipment(id: String): any {
    this.a_equipment_s.updateEquipment(id);
  }


}
