import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentsService } from 'src/app/products/instruments/instruments.service';

@Component({
  selector: 'app-single-instrument',
  templateUrl: './single-instrument.component.html',
  styleUrls: ['./single-instrument.component.css']
})
export class SingleInstrumentComponent implements OnInit {

  id: string = "";
  data: any;

  constructor(private route:ActivatedRoute, private instrument_s:InstrumentsService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => { this.id = value["id"] });
    this.data = this.findInstrumentById(this.id);
  }

  public findInstrumentById(id: string): any {
    return this.instrument_s.findInstrumentById(id).subscribe(value => { this.data = value; });
  }

  addToCart(data: any){
    if (localStorage.getItem("logedin") == "true"){
      var cartnumber: number = +localStorage.getItem("cartNumber");
      localStorage.setItem("product" + cartnumber++,  JSON.stringify(data));
      localStorage.setItem("cartNumber", ""+cartnumber);

      this._snackBar.open("Successfuly added to cart!","",{duration: 3000});
    }else{
      this.router.navigate(['/login'])
    }
  }

}
