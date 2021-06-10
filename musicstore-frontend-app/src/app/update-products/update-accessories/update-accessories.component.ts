import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Accessories, AccessoriesService } from 'src/app/products/accessories/accessories.service';

@Component({
  selector: 'app-update-accessories',
  templateUrl: './update-accessories.component.html',
  styleUrls: ['./update-accessories.component.css']
})
export class UpdateAccessoriesComponent implements OnInit {

  constructor(private route:ActivatedRoute, private accessory_s:AccessoriesService) { }

  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findAccessoriesById(this.id);
  }

  public findAccessoriesById(id: string): any {
    return this.accessory_s.findAccessoriesById(id).subscribe(value => { this.data = value; });
  }

  onSubmit(form: NgForm){
    var model: Accessories = {
      "id": this.id,
      "accessory": form.value.accessory,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.accessory_s.update(model).subscribe(value => { this.message = "Success!" });
  }

}
