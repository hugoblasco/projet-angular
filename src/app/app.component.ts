import { Component } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faBars = faBars;
  faTimes = faTimes;
  sideBarVisible = false;

  triggerSideBar() {
    this.sideBarVisible = !this.sideBarVisible;
  }
}
