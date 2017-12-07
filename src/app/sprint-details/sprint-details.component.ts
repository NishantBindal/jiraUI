import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../shared/home.component';
import { SprintDetail } from '../sprint-details/sprint';
import { JiraApiService } from '../boards/boards.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SprintDetailsComponent implements OnInit ,OnChanges {
  ctr = 0;
  loading=false;
  public doughnutChartLabels:string[]=[];
  public doughnutChartData:Number[]=[];
  public doughnutChartType:string = 'doughnut';
  public red:string;
  public green:string;
  errorMessage: string;
  ngOnChanges(): void {
    //console.log('change called');
    this.loading=true;
    this.errorMessage="";
    this.myInit();
  }


  sprintDetails: SprintDetail;
  @Input() boardId: string;

  constructor(private http: HttpClient,private boardService:JiraApiService ) {
    
  }
  trunc(hours:number):number{
    return Math.trunc(hours);
  }
  option:any={
    legend: {
      display: false
  },
     tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return data.labels[tooltipItem.index]+" : "+Math.trunc(+(+data.datasets[0].data[tooltipItem.index])/3600)+" h";
        }
      }
    }
  }
  ngOnInit() {
    this.loading=true;
    this.myInit();
    this.red='red red-parent';
    this.green='green red-parent';
  }

  myInit()
  {
    if(this.ctr==0){
      this.ctr++;
      return;
    }
    this.boardService.getActiveSprint(this.boardId).subscribe(res => {
      this.sprintDetails =res[0];
      this.loading=false;
      console.log(this.sprintDetails.timeChart);
      var x=this.sprintDetails.timeChart;
      this.doughnutChartData= x.map(x=>x["timeChart"]["originalEstimated"]);
      setTimeout( () => {this.doughnutChartLabels =  x.map(x=>x["resourseName"])});
      
    },error => {
      this.errorMessage="Please try again or refresh the page";}
  );
  }
 
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
