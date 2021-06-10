import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InstrumentsService, Instruments } from 'src/app/products/instruments/instruments.service';

@Component({
  selector: 'app-update-instruments',
  templateUrl: './update-instruments.component.html',
  styleUrls: ['./update-instruments.component.css']
})
export class UpdateInstrumentsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private instrument_s:InstrumentsService) { }

  id: string;
  data: any;
  message: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findInstrumentById(this.id);
  }

  public findInstrumentById(id: string): any {
    return this.instrument_s.findInstrumentById(id).subscribe(value => { this.data = value; });
  }

  onSubmit(form: NgForm){
    var model: Instruments = {
      "id": this.id,
      "instrument": form.value.instrument,
      "type": form.value.type,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.description,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.instrument_s.update(model).subscribe(value => { this.message = "Success!" });
  }

}
