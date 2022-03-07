import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calory-tracker',
  templateUrl: './calory-tracker.component.html',
  styleUrls: ['./calory-tracker.component.css']
})
export class CaloryTrackerComponent implements OnInit {

  show:boolean = false

  Name:string = ""
  Calory:string = ""
  Image:string = ""
  constructor() { }

  ngOnInit(): void {

  }

  toggleShow(){
    this.show = true
  }

  onSubmit():void{
    this.show = false
    console.log(this.Name,this.Calory,this.Image)
    this.Name = ""
    this.Calory = ""
    this.Image = ""
  }

}
