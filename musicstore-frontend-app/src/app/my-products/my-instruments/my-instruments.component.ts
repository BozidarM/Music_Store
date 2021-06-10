import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InstrumentsService } from '../../products/instruments/instruments.service';

@Component({
  selector: 'app-my-instruments',
  templateUrl: './my-instruments.component.html',
  styleUrls: ['./my-instruments.component.css']
})
export class MyInstrumentsComponent implements OnInit {

  constructor(private instrument_s: InstrumentsService,  private _snackBar: MatSnackBar) { }

  data: any;

  ngOnInit(): void {
    this.findAllBySeller_username(localStorage.getItem("username"))
  }

  public findAllBySeller_username(sUsername: string): any {
    this.instrument_s.findAllBySeller_username(sUsername).subscribe(value => { this.data = value; });
  }

  deleteInstrument(id: string){
    this.instrument_s.delete(id).subscribe();
    
    this._snackBar.open("Insturment is deleted!","",{duration: 3000});
  }

  updateInstrument(id: String): any {
    this.instrument_s.updateInstrument(id);
  }


}
