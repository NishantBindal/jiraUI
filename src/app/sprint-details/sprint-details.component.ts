import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../shared/home.component';
import { SprintDetail } from '../sprint-details/sprint';
import { JsonPipe } from '@angular/common/src/pipes/json_pipe';


@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.css']
})
export class SprintDetailsComponent implements OnInit ,OnChanges {
  
  ctr = 0;
  
  ngOnChanges(): void {
    //console.log('change called');
    this.myInit();
  }


  sprintDetails: SprintDetail;
  @Input() boardId: string;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
  
    
  }

  myInit()
  {
    if(this.ctr==0){
      this.ctr++;
      return;
    }
      this.http.get('http://localhost:55681/api/jira/GetActiveSprint?boardId='+this.boardId)
               .subscribe(x => {
                console.log('http://localhost:55681/api/jira/GetActiveSprint?boardId='+this.boardId + '  here' + x);
                
                this.sprintDetails = x[0];
                console.log(this.sprintDetails);
                //console.log(this.sprintDetails.self);
                //console.log(this.sprintDetails.timeChart);

              });
  }

  get Details(){
      return JSON.stringify(this.sprintDetails);
  }
}
