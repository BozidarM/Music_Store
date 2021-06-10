import { Component, OnInit } from '@angular/core';
import { AdditionalEquipmentService } from './additional-equipment.service';

@Component({
  selector: 'app-additional-equipment',
  templateUrl: './additional-equipment.component.html',
  styleUrls: ['./additional-equipment.component.css']
})
export class AdditionalEquipmentComponent implements OnInit {

  data: any;

  constructor(private a_equipment_s: AdditionalEquipmentService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): any {
    this.a_equipment_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }else{
      this.a_equipment_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneEquipment(id: String): any {
    this.a_equipment_s.showEquipment(id);
  }

}
