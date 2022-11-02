import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  apiDocPath = "https://documenter.getpostman.com/view/16443297/TzkyLee7";

  openAPIDoc() {
    window.open(this.apiDocPath,'_blank');
  }

  ngOnInit(): void {
  }




}
