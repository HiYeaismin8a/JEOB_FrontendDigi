import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JEOB_27102023';

  sidebarVisible: boolean = false;

  constructor() { }
  ngOnInit(): void {}


}
