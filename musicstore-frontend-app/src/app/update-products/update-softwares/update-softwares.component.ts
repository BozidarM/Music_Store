import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MusicSoftwaresService, Softwares } from 'src/app/products/music-softwares/music-softwares.service';

@Component({
  selector: 'app-update-softwares',
  templateUrl: './update-softwares.component.html',
  styleUrls: ['./update-softwares.component.css']
})
export class UpdateSoftwaresComponent implements OnInit {

  constructor(private route:ActivatedRoute, private software_s:MusicSoftwaresService) { }

  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findMusicSoftwaresById(this.id);
  }

  public findMusicSoftwaresById(id: string): any {
    return this.software_s.findMusicSoftwaresById(id).subscribe(value => { this.data = value; });
  }

  onSubmit(form: NgForm){
    var model: Softwares = {
      "id": this.id,
      "name": form.value.name,
      "developer": form.value.developer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.software_s.update(model).subscribe(value => { this.message = "Success!" });
  }

}
