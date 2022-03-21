import { Component, OnInit } from '@angular/core';
import { Publication } from './publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publications: Publication[] = [
      { title: "Ensemble forecasts of Coronavirus Disease 2019 (COVID-19) in the U.S", authors: ["Hunter, R. H."], reference:"E. L. Ray et al., “Ensemble forecasts of Coronavirus Disease 2019 (COVID-19) in the U.S,” medRxiv. 2020."}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
