import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from './instruments.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  constructor(private instrument_s: InstrumentsService) { }

  data: any;
  
  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): any {
    this.instrument_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }
    else{
      this.instrument_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneInstrument(id: String): any {
    this.instrument_s.showInstrument(id);
  }
}
