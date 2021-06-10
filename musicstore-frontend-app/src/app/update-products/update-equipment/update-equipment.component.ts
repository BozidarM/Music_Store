import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdditionalEquipmentService, Equipment } from 'src/app/products/additional-equipment/additional-equipment.service';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {

  constructor(private route:ActivatedRoute, private a_equipment_s:AdditionalEquipmentService) { }

  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findAdditionalEquipmentById(this.id);
  }

  public findAdditionalEquipmentById(id: string): any {
    return this.a_equipment_s.findAdditionalEquipmentById(id).subscribe(value => { this.data = value; });
  }

  onSubmit(form: NgForm){
    var model: Equipment = {
      "id": this.id,
      "equipment": form.value.equipment,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.a_equipment_s.update(model).subscribe(value => { this.message = "Success!" });
  }

}
