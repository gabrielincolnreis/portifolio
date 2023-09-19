import { Component, OnInit } from '@angular/core';
import jobList from 'src/assets/job-list.json';

interface Job {
  company: string,
  title: string,
  description: string,
  date: string
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {
  description: string = "";

  constructor() { }
  jobList: Array<Job> = []

  ngOnInit(): void {
    this.jobList = this.getJobList();
    this.firstJob();
  }

  getJobList(){
    fetch("./assets/job-list.json")
    .then((response)=>response.json())

    return jobList;
  }

  jobSelected(i: number){
    this.description = this.jobList[i].description;
  }

  firstJob(){
    this.description = this.jobList[0].description;
  }

}
