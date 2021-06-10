import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Instruments, InstrumentsService } from 'src/app/products/instruments/instruments.service';
@Component({
  selector: 'app-insert-instrument',
  templateUrl: './insert-instrument.component.html',
  styleUrls: ['./insert-instrument.component.css']
})
export class InsertInstrumentComponent implements OnInit {

  message: String = "";

  constructor(private instrument_s: InstrumentsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    var model: Instruments = {
      "instrument": form.value.instrument,
      "type": form.value.type,
      "name": form.value.name,
      "manufacturer": form.value.manufacturer,
      "price": parseFloat(form.value.price),
      "description": form.value.desc,
      "image": form.value.image,
      "seller_username": localStorage.getItem("username")
    }
    this.instrument_s.insert(model).subscribe(value => { this.message = "Success!" });
  }
  

}
