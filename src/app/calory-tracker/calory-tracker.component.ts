import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calory-tracker',
  templateUrl: './calory-tracker.component.html',
  styleUrls: ['./calory-tracker.component.css']
})
export class CaloryTrackerComponent implements OnInit {

  ChangeText:boolean = true
  show:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleShow(){
    this.show = !this.show
    this.ChangeText = !this.ChangeText
  }



}
