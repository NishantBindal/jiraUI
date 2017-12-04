import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardsService } from '../boards/boards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  projects = [];
  projectFromService = [];
  currentProject = '';
  currentBoardId = -1;
  isSelected = false;
  errorMessage: string;
 // Inject HttpClient into your component or service.
 constructor(private http: HttpClient, private _boardsService: BoardsService) {}
 
 open(itemName, item) {
      console.log(item);
      this.currentBoardId = item.id;
      this.currentProject = itemName;
      this.isSelected = true;
  }


  ngOnInit(): void {
    /*
    this._boardsService.getBoards()
    .subscribe(
      boards => {
        this.projectFromService = boards;
      },
      error => this.errorMessage = <any>error

      
    );
    */

    //This can be done in a service
    // Make the HTTP request:
    this.http.get('http://localhost:55681/api/jira/getboard').subscribe(data => {
    this.projects = data[0]['values'];
    
    console.log(this.projects);
    });
    


      
  }
}
