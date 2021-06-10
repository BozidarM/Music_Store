import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MusicSoftwaresService, Softwares } from 'src/app/products/music-softwares/music-softwares.service';

@Component({
  selector: 'app-insert-software',
  templateUrl: './insert-software.component.html',
  styleUrls: ['./insert-software.component.css']
})
export class InsertSoftwareComponent implements OnInit {

  constructor(private software_s: MusicSoftwaresService) { }

  message: String = "";

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model: Softwares = {
      "name": form.value.name,
      "developer": form.value.developer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.software_s.insert(model).subscribe(value => { this.message = "Success!" });
  }

}
