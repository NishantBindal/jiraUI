import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  projects = ['Project A', 'Project B', 'Project C'];
  currentProject = '';
  isSelected = false;

  open(item) {
      //alert(item);
      this.currentProject = item;
      this.isSelected = true;
  }

}
