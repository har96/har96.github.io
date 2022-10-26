import { Component, OnInit } from '@angular/core';
import { Project, PROJECTS } from "./project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
      this.projects = PROJECTS;
      this.projects = this.projects.sort((a: Project, b: Project) => b.magnitude - a.magnitude);
  }

  getCategoryClass(category: string): string {
      switch (category) {
          case "Professional":
              return "btn-success";
          case "Personal":
              return "btn-primary";
          case "Academic":
              return "btn-dark";
          default:
              return "btn-light";
      }
  }

}
