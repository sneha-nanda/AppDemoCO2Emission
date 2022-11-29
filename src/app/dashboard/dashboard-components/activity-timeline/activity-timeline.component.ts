import { Component, OnInit } from '@angular/core';
import { Activity, activities, FoodWastage, energyTips, foodTips, HomeEnergy } from './activity-timeline-data';

@Component({
  selector: 'app-activity-timeline',
  templateUrl: './activity-timeline.component.html'
})
export class ActivityTimelineComponent implements OnInit {

  activityData: Activity[];
  foodData: FoodWastage[];
  homeEnergyData: HomeEnergy[];

  constructor() {

    this.activityData = activities;
    this.foodData=foodTips;
    this.homeEnergyData=energyTips;
    
  }


  ngOnInit(): void {
  }

}
