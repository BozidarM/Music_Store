import { Component, OnInit } from '@angular/core';
import { MusicSoftwaresService } from './music-softwares.service';

@Component({
  selector: 'app-music-softwares',
  templateUrl: './music-softwares.component.html',
  styleUrls: ['./music-softwares.component.css']
})
export class MusicSoftwaresComponent implements OnInit {

  constructor(private softwares_s: MusicSoftwaresService) { }

  data: any;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): any {
    this.softwares_s.findAll().subscribe(value => { this.data = value; });
  }

  search(search: any){

    if (search.value == ""){
      this.findAll();
    }else{
      this.softwares_s.findAllByName(search.value.trim()).subscribe(value => { this.data = value; });
    }
  }

  public showOneSoftware(id: String): any {
    this.softwares_s.showSoftware(id);
  }

}
