import { Component, OnInit } from '@angular/core';
import { Publication, PUBLICATIONS } from './publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publications = PUBLICATIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
