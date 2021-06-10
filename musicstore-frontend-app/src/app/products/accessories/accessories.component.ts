import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from './accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  data: any;

  constructor(private accessory_s: AccessoriesService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): any {
    this.accessory_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }else{
      this.accessory_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneAccessory(id: String): any {
    this.accessory_s.showAccessory(id);
  }

}
