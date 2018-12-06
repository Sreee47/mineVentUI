import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-my-layout',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <ngx-header [position]="sidebar.id === 'left' ? 'normal': 'inverse'"></ngx-header>
      </nb-layout-header>

      <nb-layout-column class="image-container">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

    </nb-layout>
  `,
  styleUrls: ['./my-layout.component.scss']
})
export class MyLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
