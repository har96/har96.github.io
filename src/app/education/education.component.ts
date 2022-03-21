import { Component, OnInit } from '@angular/core';
import { Degree } from "./degree";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  degrees: Degree[] = [
      {
          level: "Master of Science",
          university: "Mississippi State University",
          major: "Computational Engineering",
          gpa: 4.0,
          details: "Completed the project-based degree with a focus on Signal Processing"
      },
      {
          level: "Bachelor of Science",
          university: "Mississippi State University",
          major: "Computer Engineering",
          gpa: 4.0,
          details: ""
      },
      {
          level: "Associate of Arts",
          university: "Hinds Community College",
          major: "Computer Engineering",
          gpa: 4.0,
          details: ""
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
