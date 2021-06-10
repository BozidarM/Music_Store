import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdditionalEquipmentService, Equipment } from 'src/app/products/additional-equipment/additional-equipment.service';

@Component({
  selector: 'app-insert-equipment',
  templateUrl: './insert-equipment.component.html',
  styleUrls: ['./insert-equipment.component.css']
})
export class InsertEquipmentComponent implements OnInit {

  constructor(private a_equipment_s: AdditionalEquipmentService) { }

  message: String = "";

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model: Equipment = {
      "equipment": form.value.equipment,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.a_equipment_s.insert(model).subscribe(value => { this.message = "Success!" });
  }

}
