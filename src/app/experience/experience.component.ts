import { Component, OnInit } from '@angular/core';
import { Job, EXPERIENCE } from './job';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  jobs: Job[] = [];

  constructor() { }

  ngOnInit(): void {
      this.jobs = EXPERIENCE;
      this.jobs = this.jobs.sort((a: Job, b: Job) => +new Date(b.start_date) - +new Date(a.start_date));
  }

}
