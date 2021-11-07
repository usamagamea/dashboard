import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
 
  title = "Students List";
  modelList:any 
  constructor() { }

  ngOnInit(): void {

    this.modelList = [
      {
        id:1,
        firstName: "Mohamed",
        lastName: "Tamer",
        Email: "mohamed@domain.com"
        
  },
  {
    id:2,
    firstName: "Ahmed",
    lastName: "Tamer",
    Email: "ahmed@domain.com"
  },
  {
    id:3,
    firstName: "Ali",
    lastName: "Tamer",
    Email: "ali@domain.com"
  }
    ]

  }
}
